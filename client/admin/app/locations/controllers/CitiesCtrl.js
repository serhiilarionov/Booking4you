'use strict';

angular.module('app.locations')
  .controller('CitiesController',
    function (regions, City) {
      var vm = this;
      
      vm.UI = {
        citiesTableSettings: {
          name: 'citiesTable',
          title: 'Города',
          resource: City,
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
              title: 'Адресс',
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
              editorType: 'checkbox'
            }
          ]
        }
      };

    });