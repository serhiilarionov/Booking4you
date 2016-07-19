angular.module('customElements')
  .directive('cTable', function ($compile, $rootScope, $http, $timeout, $state, $stateParams,
                                 uiGmapGoogleMapApi, DTOptionsBuilder, DTColumnBuilder,
                                 Table, Map, TableFilter) {
    return {
      restrict: 'A',
      scope: true,
      compile: function compile() {
        return {
          pre: function ($scope, element, attrs) {

            var map = new Map($scope);
            var table = new Table($scope, $stateParams);            
            var tableFilter = new TableFilter($scope);


            $scope.stateParams = $stateParams;

            // Work with maps
            $scope.inputMaps = {};
            $scope.findAddress = map.findAddress;
            $scope.showMap = map.showMap;

            //select isolated scope and controller scope
            table.setDefaultValue(attrs.cTable, $scope.$parent);

            //Create table
            table.createTable();
            table.addActionsButtons();
            table.addColumns();

            //Work with table data
            $scope.addNewRow = table.addNewRow;
            $scope.editRow = table.editRow;
            $scope.removeRow = table.removeRow;
            $scope.reloadTableData = table.refresh;


            // Filtering
            $scope.setFilter = tableFilter.setFilter;
            tableFilter.setFilterData();
            $scope.resetTableFilter = tableFilter.reset;
            

            $scope.goToBack = function () {
              $stateParams.previousState && $state.go($stateParams.previousState);
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

          },
          post: function ($scope, element, attrs) {
            setTimeout(function() {
              element.find('thead').append(document.getElementById('column-filter'));
              $('[filter-table]').remove();
              $scope.showFilter = true;
            }, 500)
          }
        }
      },
      templateUrl: '/admin/app/_common/customElements/templates/table.tpl.html'
    }
  })