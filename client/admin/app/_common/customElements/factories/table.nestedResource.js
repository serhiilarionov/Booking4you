'use strict';

angular.module('customElements')
  .factory('TableNestedResource', function (Table, DTOptionsBuilder, ErrorHandler, Notification, SERVER_URL, $http) {
    return function ($scope, $stateParams) {
      var _TableNestedResource = new Table($scope, $stateParams);
      $scope.SERVER_URL = SERVER_URL;
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
          .then(function (newData) {
            var fd = new FormData();
            fd.append('test', $scope.table.newData.file);
            fd.append('cityId', parseInt($scope.table.newData.cityId));
            fd.append('categoryId', parseInt($scope.table.newData.categoryId));
            fd.append('companyId', parseInt(newData.id));

            return $http.post('/api/containers/test/upload', fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined},
              responseType: "arraybuffer"
            })
          })
          .then(function() {
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
        return $scope.settings.resource.updateById({fk: id, id: $stateParams.id}, newData)
          .$promise
          .then(function () {
            var fd = new FormData();
            fd.append('test', $scope.table.editRowData.file);
            fd.append('cityId', parseInt($scope.table.editRowData.cityId));
            fd.append('categoryId', parseInt($scope.table.editRowData.categoryId));
            fd.append('companyId', parseInt($scope.table.editRowData.id));

            return $http.post('/api/containers/test/upload', fd, {
              transformRequest: angular.identity,
              headers: {'Content-Type': undefined},
              responseType: "arraybuffer"
            })
          })
          .then(function() {
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
        if ($stateParams.id && id) {
          return $scope.settings.resource.destroyById({id: $stateParams.id, fk: id})
            .$promise
            .then(function () {
              $scope.tableInstance.changeData(_dataList);
              $scope.hideModal(settings.name + 'RemoveRowModal');
              Notification.success();
            })
            .catch(function (err) {
              ErrorHandler.serverResponse(err);
            })
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