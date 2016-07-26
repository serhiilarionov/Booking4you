'use strict';

angular.module('customElements')
  .factory('Table', function ($compile, $timeout, DTOptionsBuilder, DTColumnBuilder, ErrorHandler, Notification) {
    return function ($scope, $stateParams) {
      var _Table = this;
      var crud = null;
      
      /**
       * Fucntion for create table settings
       */
      function createTable() {
        $scope.tableOptions = DTOptionsBuilder
          .fromFnPromise(_dataList)
          .withOption('createdRow', _createdRow)
          .withOption('rowCallback', _onRowClick)
          .withDOM("<'dt-toolbar '<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>t" +
            "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>");
      }
      
      /**
       * Add action buttons to table
       */
      function addActionsButtons () {
        if ($scope.settings.buttons.edit || $scope.settings.buttons.remove) {
          $scope.tableColumns = [
            DTColumnBuilder.newColumn(null)
              .withTitle('Действия')
              .notSortable()
              .withClass('action-buttons')
              .renderWith(_actionsHtml)
          ];
        }
      }

      /**
       * Add columns to table
       */
      function addColumns() {
        $scope.settings.columns.forEach(function (col) {
          $scope.tableColumns.push(DTColumnBuilder
            .newColumn(col.dataField)
            .withTitle(col.title)
            .renderWith(function (data) {
              if (!data) {
                return '';
              }
              if (col.editorType == 'points') {
                return '(' + data.lat + ', ' + data.lng + ')';
              } else {
                return data;
              }
            }));
        });
      }

      // ------------------------------------------------
      
      //Work with data

      /**
       * Function will add new row to the table
       */
      function addNewRow() {
        return _selectPromise($scope.table.newData, 'add', 'create')
          .then(function () {
            $scope.tableInstance.changeData(_dataList);
            $scope.hideModal($scope.settings.name + 'NewRowModal');
            $scope.table.newData = {active: false};
            Notification.success();
          })
          .catch(function (err) {
            ErrorHandler.serverResponse(err);
          })
      }
      
      /**
       * Function will edit row from the table
       */
      function editRow(id, data) {
        var settings = $scope.settings;
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
            Notification.success();
          })
          .catch(function (err) {
            ErrorHandler.serverResponse(err);
          })
      }

      /**
       * Function will remove row by key id
       * @param id
       */
      function removeRow(id) {
        var settings = $scope.settings;
        return _selectPromise({id: id}, 'remove', 'destroyById')
          .then(function () {
            $scope.tableInstance.changeData(_dataList);
            $scope.hideModal(settings.name + 'RemoveRowModal');
            Notification.success();
          })
          .catch(function (err) {
            ErrorHandler.serverResponse(err);
          })
      }

      /**
       * Refresh table data
       */
      function refresh() {
        $scope.tableInstance.changeData(_dataList);
      }

      // ------------------------------------------------ 
      
      //private methods

      /**
       * Functions generating buttons for edit and delete row
       * @param data Data of the row
       * @returns {string}
       */
      function _actionsHtml(data) {
        $scope.table.dataList[data.id] = data;
        return '<button ng-if="settings.buttons.edit" class="btn btn-warning" data-toggle="modal" ' +
          'data-target="#' + $scope.settings.name +'EditRowModal"' +
          'ng-click="onStartEditing(' + data.id + ')" >' +
          '   <i class="fa fa-edit"></i>' +
          '</button>&nbsp;' +
          '<button ng-if="settings.buttons.remove" class="btn btn-danger" data-toggle="modal" ' +
          'data-target="#' + $scope.settings.name +'RemoveRowModal" ' +
          'ng-click="setCurrentKeyId(' + data.id + ')" >' +
          '   <i class="fa fa-trash-o"' +
          '</button>';
      }
      
      /**
       * Function include scope to the row
       * @param row Table row
       * @private
       */
      function _createdRow(row) {
        return $timeout(function () {
          $('.action-buttons').unbind('click');
          return $compile(angular.element(row).contents())($scope);
        });
      }
      
      /**
       * Function added function on table row click
       * @param nRow
       * @param aData
       * @returns {*}
       * @private
       */
      function _onRowClick(nRow, aData) {
        var settings = $scope.settings;
        if (settings.onRowClick) {
          $('td', nRow).unbind('click');
          $('td', nRow).bind('click', function () {
            settings.onRowClick(nRow, aData);
          });
        }
        return nRow;
      }

      /**
       * Function return data list
       * @returns {*}
       * @private
       */
      function _dataList() {
        return _selectPromise({filter: $stateParams.filter}, 'list', 'find')
          .then(function (res) {
            $scope.table.dataListArray = res;
            return res;
          })
          .catch(function (err) {
            ErrorHandler.serverResponse(err);
          })
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
        var settings = $scope.settings;
        if (settings.resource) {
          var method = settings.resource[resourceActionName || actionName];
          method || (method = settings.resource);
          return method(data).$promise;
        }
        if (settings.actions && settings.actions.add) {
          return settings.actions[actionName](data);
        } else {
          return crud[actionName](data);
        }
      }
      
      // ------------------------------------------------ 

      _Table._createdRow = _createdRow;
      _Table._onRowClick = _onRowClick;
      
      //public methods
            
      // Work with table
      _Table.crud = crud;
      _Table.createTable = createTable;
      _Table.addActionsButtons = addActionsButtons;
      _Table.addColumns = addColumns;

      //Work with data
      _Table.addNewRow = addNewRow;
      _Table.editRow = editRow;
      _Table.removeRow = removeRow;
      _Table.refresh = refresh;

    }
  });