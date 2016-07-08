'use strict';

angular.module('app.locations')
  .controller('CitiesController',
    function (regions) {
      var vm = this;

      vm.UI = {
        citiesTableSettings: {
          name: 'citiesTable',
          title: 'Страны',
          apiUrl: '/cities',
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
              editorType: 'number',
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
              dataField: 'regionId',
              title: 'ID Региона',
              required: true,
              editorType: 'selectBox',
              editorOptions: {
                dataSource: regions,
                value: 'id',
                caption: 'name'
              }
            },
            {
              dataField: 'point',
              title: 'Point',
              required: true
            },
            {
              dataField: 'bound',
              title: 'Bound',
              required: true
            },
            {
              dataField: 'active',
              title: 'Активно',
              editorType: 'checkbox'
            }
          ]
        }
      };

    });