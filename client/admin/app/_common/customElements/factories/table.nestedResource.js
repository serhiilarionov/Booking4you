'use strict';

angular.module('customElements')
  .factory('TableNestedResource', function (Table, DTOptionsBuilder) {
    return function ($scope, $stateParams) {
      var _TableNestedResource = new Table($scope, $stateParams);

      /**
       * Fucntion for create table settings
       */
      function createTable() {
        $scope.tableOptions = DTOptionsBuilder
          .fromFnPromise(_dataList)
          .withOption('createdRow', _TableNestedResource._createdRow)
          .withOption('rowCallback', _TableNestedResource._onRowClick)
          .withDOM("<'dt-toolbar '<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>t" +
            "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>");
      }

      /**
       * Function will add new row to the table
       */
      function addNewRow () {
        return $scope.settings.resource.create({id: $stateParams.id}, $scope.table.newData)
          .$promise
          .then(function () {
            $scope.tableInstance.changeData(_dataList);
            $scope.hideModal($scope.settings.name + 'NewRowModal');
            $scope.table.newData = {active: false};
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
        return $scope.settings.resource.updateById({fk: id, id: $stateParams.id}, newData)
          .$promise
          .then(function () {
            $scope.tableInstance.changeData(_dataList);
            $scope.hideModal(settings.name + 'EditRowModal');
          });
      }

      /**
       * Function will remove row by key id
       * @param id
       */
      function removeRow(id) {
        var settings = $scope.settings;
        if ($stateParams.id && id) {
          return $scope.settings.resource.destroyById({id: $stateParams.id, fk: id})
            .$promise
            .then(function () {
              $scope.tableInstance.changeData(_dataList);
              $scope.hideModal(settings.name + 'RemoveRowModal');
            });
        } else {
          return false;
        }

      }


      function _dataList() {
        return $scope.settings.resource({id: $stateParams.id, filter: $stateParams.filter}).$promise;
      }
      /**
       * Refresh table data
       */
      function refresh() {
        $scope.tableInstance.changeData(_dataList);
      }


      _TableNestedResource._dataList = _dataList;

      _TableNestedResource.createTable = createTable;

      //Work with data
       _TableNestedResource.addNewRow = addNewRow;
       _TableNestedResource.editRow = editRow;
       _TableNestedResource.removeRow = removeRow;
       _TableNestedResource.refresh = refresh;

      return _TableNestedResource;

    }
  });