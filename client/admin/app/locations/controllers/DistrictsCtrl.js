'use strict';

angular.module('app.locations')
  .controller('DistrictsController',
    function ($state, cities, District) {
      var vm = this;

      vm.UI = {
        districtsTableSettings: {
          name: 'districtsTable',
          title: 'Районы',
          resource: District,
          buttons: {
            add: true,
            refresh: true,
            edit: true,
            remove: true
          },
          columns: [
            {
              dataField: 'id',
              title: 'ID',
              readOnly: true
            },
            {
              dataField: 'name',
              title: 'Название',
              required: true
            },
            {
              dataField: 'cityId',
              title: 'ID Города',
              required: true,
              editorType: 'selectBox',
              editorOptions: {
                dataSource: cities,
                value: 'id',
                caption: 'name'
              }
            },
            {
              dataField: 'point',
              title: 'Point',
              editorType: 'points'
            },
            {
              dataField: 'bound',
              title: 'Bound',
              editorType: 'points'
            }
          ],
          onRowClick: function (nRow, aData) {
            $state.go('app.locations.streets', {
              filter: angular.toJson({
                where: {
                  districtId: aData.id
                }})
            });
          }
        }
      };

    });