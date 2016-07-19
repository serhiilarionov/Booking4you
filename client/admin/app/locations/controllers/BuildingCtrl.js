'use strict';

angular.module('app.locations')
  .controller('BuildingsController',
    function (streets, Building) {
      var vm = this;

      vm.UI = {
        buildingsTableSettings: {
          name: 'buildingsTable',
          title: 'Здания',
          resource: Building,
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
              dataField: 'streetId',
              title: 'ID Улицы',
              required: true,
              dataType: 'number',
              editorType: 'selectBox',
              editorOptions: {
                dataSource: streets,
                value: 'id',
                caption: 'name'
              }
            },
            {
              dataField: 'number',
              title: 'Номер',
              required: true
            },
            {
              dataField: 'point',
              title: 'Point', 
              editorType: 'points'
            }
          ]
        }
      };

    });