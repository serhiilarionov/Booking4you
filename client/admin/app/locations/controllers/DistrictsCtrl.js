'use strict';

angular.module('app.locations')
  .controller('DistrictsController',
    function (cities) {
      var vm = this;

      vm.UI = {
        districtsTableSettings: {
          name: 'districtsTable',
          title: 'Районы',
          apiUrl: '/districts',
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
              dataField: 'name_orig',
              title: 'Оригинальное название',
              required: true
            },
            {
              dataField: 'city_id',
              title: 'ID Района',
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