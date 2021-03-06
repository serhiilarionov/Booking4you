'use strict';

angular.module('app.locations')
  .controller('StreetsController',
    function ($state,  cities, districts, Street) {
      var vm = this;

      vm.UI = {
        streetsTableSettings: {
          name: 'streetsTable',
          title: 'Улицы',
          resource: Street,
          buttons: {
            add: +true,
            refresh: true,
            edit: true,
            remove: true
          },
          columns: [
            {
              dataField: 'id',
              title: 'ID',
              dataType: 'number',
              editorType: 'number',
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
              dataType: 'number',
              editorType: 'selectBox',
              editorOptions: {
                dataSource: cities,
                value: 'id',
                caption: 'name'
              }
            },
            {
              dataField: 'districtId',
              title: 'ID Района',
              required: true,
              dataType: 'number',
              editorType: 'selectBox',
              editorOptions: {
                dataSource: districts,
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
            $state.go('app.locations.buildings', {
              filter: angular.toJson({
                where: {
                  streetId: aData.id
                }}),
              previousState: 'app.locations.streets'
            });
          }
        }
      };

    });