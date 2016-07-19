'use strict';

angular.module('app.catalog').controller('CompaniesController', function (categories, Company) {
  var vm = this;

  //UI settings
  vm.UI = {
    companiesTableSettings: {
      name: 'companiesTable',
      title: 'Компании',
      resource: Company,
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
          dataField: 'name',
          title: 'Название',
          required: true
        },
        {
          dataField: 'title',
          title: 'Заголовок',
          required: true
        },
        {
          dataField: 'categoryId',
          title: 'ID категории',
          dataType: 'number',
          editorType: 'selectBox',
          editorOptions: {
            dataSource: categories,
            value: 'id',
            caption: 'name'
          }
        },
        {
          dataField: 'desc',
          title: 'Описание'
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