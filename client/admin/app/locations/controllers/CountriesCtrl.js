'use strict';

angular.module('app.locations')
  .controller('CountriesController',
    function ($state, Country) {
      var vm = this;

      vm.UI = {
        countriesTableSettings: {
          name: 'countriesTable',
          title: 'Страны',
          resource: Country,
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
          ],
          onRowClick: function (nRow, aData) {
            $state.go('app.locations.regions', {
              filter: angular.toJson({
                where: {
                  countryId: aData.id
                }}),
              previousState: 'app.locations.countries'
            })
          }
        }
      };

    });