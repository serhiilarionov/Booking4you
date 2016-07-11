angular.module('customElements')
  .directive('cTable', function ($compile, DTOptionsBuilder, DTColumnBuilder, BaseTableCrud, Category) {
    return {
      restrict: 'A',
      scope: true,
      compile: function compile() {
        return {
          pre: function ($scope, element, attrs) {
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
              editRowData: null
            };
            $scope.tableOptions = null;
            $scope.tableColumns = [];
            $scope.tableInstance = null;
            $scope.newData = {active: false};

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
                .withTitle(col.title));
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
              return _selectPromise($scope.newData, 'add', 'create')
                .then(function () {
                  $scope.tableInstance.changeData(_dataList);
                  $scope.hideModal(settings.name + 'NewRowModal');
                  $scope.newData = {active: false};
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
              newData.id =  data.id;
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
              if (settings.resource) {
                return settings.resource.find()
                  .$promise
                  .then(function (res) {
                    return res;
                  });
              }
              if (settings.dataSource) {
                return settings.dataSource()
                  .then(function (res) {
                    $scope.table.dataListArray = res;
                    return res;
                  })
              } else {
                return crud.list()
                  .then(function (res) {
                    $scope.table.dataListArray = res;
                    return res;
                  })
              }
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