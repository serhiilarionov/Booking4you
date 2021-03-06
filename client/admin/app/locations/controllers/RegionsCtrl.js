'use strict';

angular.module('app.locations')
  .controller('RegionsController',
    function ($state,  countries, Region) {
      var vm = this;

      vm.UI = {
        regionsTableSettings: {
          name: 'regionsTable',
          title: 'Регионы',
          resource: Region,
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
              dataType: 'number',
              readOnly: true
            },
            {
              dataField: 'slug',
              title: 'Slug',
              required: true
            },
            {
              dataField: 'name',
              title: 'Название',
              required: true
            },
            {
              dataField: 'countryId',
              title: 'ID Страны',
              required: true,
              dataType: 'number',
              editorType: 'selectBox',
              editorOptions: {
                dataSource: countries,
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
            },
            {
              dataField: 'active',
              title: 'Активно',
              dataType: 'boolean',
              editorType: 'checkbox'
            }
          ],
          onRowClick: function (nRow, aData) {
            $state.go('app.locations.cities', {
              filter: angular.toJson({
                where: {
                  regionId: aData.id
                }}),
              previousState: 'app.locations.regions'
            });
          }
        }
      };

    });