'use strict';

angular.module('customElements')
  .factory('TableFilter', function ($state, $stateParams) {
    return function ($scope) {
      var _TableFilter = this;

      /**
       * Function will set filter params
       */
      function setFilter () {
        var filter = angular.fromJson($stateParams.filter);
        filter || (filter = {where: {}});
        $scope.settings.columns.forEach(function(col) {
          if (col.editorType != 'points') {
            if (col.filter) {
              switch (col.dataType) {
                case 'text': {
                  filter.where[col.dataField] = {
                    like: '%' + col.filter + '%'
                  };
                  break;
                }
                case 'number': 
                case 'boolean': {
                  filter.where[col.dataField] = col.filter;
                  break;
                }
                default: {
                  filter.where[col.dataField] = {
                    like: '%' + col.filter + '%'
                  };
                  break;
                }
              }

            } else {
              delete filter.where[col.dataField];
            }
          }
        });
        $stateParams.filter = angular.toJson(filter);
        $state.transitionTo($state.current, $stateParams, {reload: true, inherit: false, notify: true});
      }

      /**
       * Function sets the value for filter in header inputs
       */
      function setFilterData() {
        var stateFilterData = angular.fromJson($stateParams.filter);
        stateFilterData && (stateFilterData = stateFilterData.where);
        $scope.settings.columns.forEach(function (col) {
          if (stateFilterData) {
            if (typeof stateFilterData[col.dataField] == 'object') {
              col.filter = stateFilterData[col.dataField].like.split('%')[1];
            } else {
              col.filter = stateFilterData[col.dataField];
            }
          } else {
            col.filter = '';
          }
        });
      }
      
      /**
       * The function resets the filter table
       */
      function reset () {
        $state.transitionTo($state.current, {}, {reload: true, inherit: false, notify: true});
      }

      _TableFilter.setFilter = setFilter;
      _TableFilter.setFilterData = setFilterData;
      _TableFilter.reset = reset;

    }
  });