'use strict';

angular.module('app.locations')
  .controller('StreetsController',
    function (cities,districts) {
      var vm = this;

      vm.UI = {
        streetsTableSettings: {
          name: 'streetsTable',
          title: 'Улицы',
          apiUrl: '/streets',
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
              editorType: 'number',
              readOnly: true
            },
            {
              dataField: 'name',
              title: 'Название',
              required: true
            },
            {
              dataField: 'name_orig',
              title: 'Оригинальное название',
              required: true
            },
            {
              dataField: 'city_id',
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
              dataField: 'district_id',
              title: 'ID Района',
              required: true,
              editorType: 'selectBox',
              editorOptions: {
                dataSource: districts,
                value: 'id',
                caption: 'name'
              }
            },
            {
              dataField: 'street_type_id',
              title: 'ID Региона',
              editorType: 'number',
              required: true
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
            }
          ]
        }
      };

    });