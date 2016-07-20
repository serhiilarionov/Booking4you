'use strict';

angular.module('app.catalog').controller('CompanyServicesController', function ($stateParams, Company, Category) {
  var vm = this;

  //UI settings
  vm.UI = {
    servicesTableSettings: {
      name: 'companiesTable',
      title: 'Компании',
      resource: Company.service,
      nestedResource: true,
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
          dataField: 'name',
          title: 'Название',
          required: true
        },
        {
          dataField: 'categoryId',
          title: 'ID категории',
          dataType: 'number',
          editorType: 'selectBox',
          editorOptions: {
            dataSource: Category.find(),
            value: 'id',
            caption: 'name'
          }
        },
        {
          dataField: 'companyId',
          title: 'ID компании',
          dataType: 'number',
          editorType: 'selectBox',
          editorOptions: {
            dataSource: Company.find(),
            value: 'id',
            caption: 'name'
          },
          readOnly: true
        },
        {
          dataField: 'desc',
          title: 'Описание'
        },
        {
          dataField: 'price',
          title: 'Цена',
          dataType: 'number',
          editorType: 'number'
        },
        {
          dataField: 'salePrice',
          title: 'Продажная цена',
          dataType: 'number',
          editorType: 'number'
        },
        {
          dataField: 'currency',
          title: 'Валюта'
        },
        {
          dataField: 'position',
          title: 'Позиция',
          dataType: 'number',
          editorType: 'number'
        },
        {
          dataField: 'active',
          title: 'Активно',
          dataType: 'boolean',
          editorType: 'checkbox'
        }
      ]
    }
  };


});