angular.module('customElements')
  .directive('cTable', function ($compile, $rootScope, $http, $timeout,
                                 uiGmapGoogleMapApi, DTOptionsBuilder, DTColumnBuilder,
                                 BaseTableCrud) {
    return {
      restrict: 'A',
      scope: true,
      compile: function compile() {
        return {
          pre: function ($scope, element, attrs) {

            /** Work with maps **/
            $scope.inputMaps = {};

            /**
             * Function will send request to google maps api, showing map and marker by this points
             * @param name Name of field
             * @param address Search address
             * @param dataType Type of data (newData, editData)
             */
            $scope.findAddress = function (name, address, dataType) {

              var accessString = (dataType || '') + name;
              $scope.inputMaps[accessString] || ($scope.inputMaps[accessString] = {});

              var map = $scope.inputMaps[accessString];

              map.notFound = false;

              var geocoder = new google.maps.Geocoder();

              geocoder.geocode({address: address}, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {

                  if (map.display) {
                    map.display = false;
                  }
                  $scope.showMap(name, dataType, {
                    location: {
                      lat: results[0].geometry.location.lat(),
                      lng: results[0].geometry.location.lng()
                    },
                    zoom: 8
                  });

                } else {
                  map.notFound = true;
                  map.display = false;
                }
              });
            };

            /**
             * Function show map with static center
             * @param name Name of field
             * @param dataType Type of data (newData, editData)
             * @param [mapSettings] Settings for map
            //  */
            $scope.showMap = function (name, dataType, mapSettings) {
              mapSettings || (mapSettings = {location: {}});

              var defaultLocation = $scope.table[dataType][name] ? $scope.table[dataType][name] : {
                lat:  47.89701,
                lng: 33.39706
              };

              var accessString = (dataType || '') + name;
              $scope.inputMaps[accessString] || ($scope.inputMaps[accessString] = {});

              var map = $scope.inputMaps[accessString];

              if (map.display) {
                map.display = false;
              }

              map.map = {
                center: {
                  latitude: mapSettings.location.lat || defaultLocation.lat,
                  longitude: mapSettings.location.lng || defaultLocation.lng
                },
                zoom: mapSettings.zoom || 8,
                events: {
                  click: function (mapModel, eventName, originalEventArgs) {
                    $scope.$apply(function () {
                      var e = originalEventArgs[0];
                      map.marker.coords = {
                        latitude: e.latLng.lat(),
                        longitude: e.latLng.lng()
                      };

                      $scope.table[dataType][name] = {
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng()
                      }
                    })
                  }
                }
              };

              map.options = {scrollwheel: false};
              map.coordsUpdates = 0;
              map.dynamicMoveCtr = 0;

              $scope.table[dataType][name] = {
                lat: mapSettings.location.lat || defaultLocation.lat,
                lng: mapSettings.location.lng  || defaultLocation.lng
              };

              map.marker = {
                id: 0,
                coords: {
                  latitude: mapSettings.location.lat || defaultLocation.lat,
                  longitude: mapSettings.location.lng || defaultLocation.lng
                },
                options: {draggable: true}
              };

              map.display = true;

            };

            /** Work with maps **/


            //select isolated scope and controller scope
            var settings = $scope.$parent;

            attrs.cTable.split('.').forEach(function (item) {
              settings = settings[item]
            });
            $scope.settings = settings;
            $scope.scope = $scope;

            var crud = null;
            if (settings.apiUrl) {
              crud = new BaseTableCrud(settings.apiUrl);
            }
            $scope.table = {
              dataList: {},
              dataListArray: [],
              selectedRowKeyId: null,
              editRowData: null,
              newData: {active: false}
            };
            $scope.tableOptions = null;
            $scope.tableColumns = [];
            $scope.tableInstance = null;

            //Set table options
            $scope.tableOptions = DTOptionsBuilder
              .fromFnPromise(_dataList)
              .withOption('createdRow', _createdRow)
              .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>t" +
                "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>");

            //Set actions column
            if (settings.buttons.edit || settings.buttons.remove) {
              $scope.tableColumns = [
                DTColumnBuilder.newColumn(null)
                  .withTitle('Действия')
                  .notSortable()
                  .withClass('action-buttons')
                  .renderWith(_actionsHtml)
              ];
            }

            //Set columns
            $scope.settings.columns.forEach(function (col) {
              $scope.tableColumns.push(DTColumnBuilder
                .newColumn(col.dataField)
                .withTitle(col.title)
                .renderWith(function(data) {
                  if (!data) {return '';}
                  if (col.editorType == 'points') {
                    return '(' + data.lat + ', ' + data.lng + ')';
                  } else {
                    return data;
                  }
                  }))


            });

            /**
             * Refresh table data
             */
            $scope.reloadTableData = function () {
              $scope.tableInstance.changeData(_dataList);
            };

            /**
             * Function will add new row to the table
             */
            $scope.addNewRow = function () {
              return _selectPromise($scope.table.newData, 'add', 'create')
                .then(function () {
                  $scope.tableInstance.changeData(_dataList);
                  $scope.hideModal(settings.name + 'NewRowModal');
                  $scope.table.newData = {active: false};
                })
            };

            /**
             * Function will edit row from the table
             */
            $scope.editRow = function (id, data) {
              var newData = {};
              for (var field in data) {
                if (data[field] != $scope.table.dataList[id][field]) {
                  newData[field] = data[field];
                }
              }
              newData.id = data.id;
              return _selectPromise(newData, 'edit', 'upsert')
                .then(function () {
                  $scope.tableInstance.changeData(_dataList);
                  $scope.hideModal(settings.name + 'EditRowModal');
                });
            };

            /**
             * Function will remove row by key id
             * @param id
             */
            $scope.removeRow = function (id) {
              return _selectPromise({id: id}, 'remove', 'deleteById')
                .then(function () {
                  $scope.tableInstance.changeData(_dataList);
                  $scope.hideModal(settings.name + 'RemoveRowModal');
                });
            };

            /**
             * The function hides the modal window
             * @param id
             */
            $scope.hideModal = function (id) {
              angular.element('#' + id).modal('hide');
            };

            /**
             * Function set currentKeyId
             * @param val Value for set
             */
            $scope.setCurrentKeyId = function (val) {
              $scope.currentKeyId = val;
            };

            /**
             * Function set current data for editing
             * @param id Id of row key
             */
            $scope.onStartEditing = function (id) {
              $scope.table.selectedRowKeyId = id;
              $scope.table.editRowData = angular.copy($scope.table.dataList[id]);
              $scope.inputMaps = {};
            };

            //private methods

            /**
             * Function include scope to the row
             * @param row Table row
             * @private
             */
            function _createdRow(row) {
              $compile(angular.element(row).contents())($scope);
            }

            /**
             * Functions generating buttons for edit and delete row
             * @param data Data of the row
             * @returns {string}
             */
            function _actionsHtml(data) {
              $scope.table.dataList[data.id] = data;
              return '<button ng-if="settings.buttons.edit" class="btn btn-warning" data-toggle="modal" ' +
                'data-target="#{{settings.name}}EditRowModal"' +
                'ng-click="onStartEditing(' + data.id + ')" >' +
                '   <i class="fa fa-edit"></i>' +
                '</button>&nbsp;' +
                '<button ng-if="settings.buttons.remove" class="btn btn-danger" data-toggle="modal" ' +
                'data-target="#{{settings.name}}RemoveRowModal" ' +
                'ng-click="setCurrentKeyId(' + data.id + ')" >' +
                '   <i class="fa fa-trash-o"' +
                '</button>';
            }

            /**
             * Function return data list
             * @returns {*}
             * @private
             */
            function _dataList() {
              return _selectPromise({}, 'list', 'find')
                .then(function (res) {
                  $scope.table.dataListArray = res;
                  return res;
                });
            }

            /**
             * Function return action promise
             * @param data Data for action
             * @param actionName action name
             * @param resourceActionName resource action name
             * @returns {*}
             * @private
             */
            function _selectPromise(data, actionName, resourceActionName) {
              if (settings.resource) {
                return settings.resource[resourceActionName || actionName](data).$promise;
              }
              if (settings.actions && settings.actions.add) {
                return settings.actions[actionName](data);
              } else {
                return crud[actionName](data);
              }
            }

          }
        }
      },
      templateUrl: '/admin/app/_common/customElements/templates/table.tpl.html'
    }
  });