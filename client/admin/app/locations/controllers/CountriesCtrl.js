'use strict';

angular.module('app.locations')
  .controller('CountriesController',
    function () {
      var vm = this;

      vm.UI = {
        countriesTableSettings: {
          name: 'countriesTable',
          title: 'Страны',
          apiUrl: '/countries',
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
              dataField: 'code',
              title: 'Код',
              required: true
            },
            {
              dataField: 'name',
              title: 'Название',
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