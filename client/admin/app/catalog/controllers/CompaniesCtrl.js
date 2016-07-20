'use strict';

angular.module('app.catalog').controller('CompaniesController', function ($state, $stateParams, Company, Category) {
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
            dataSource: Category.find(),
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
          dataType: 'boolean',
          editorType: 'checkbox'
        }
      ],
      onRowClick: function (nRow, aData) {
        delete $stateParams.filter;
        $state.go('app.catalog.companyServices', {
          id: aData.id,
          previousState: 'app.catalog.companies'
        })
      }
    }
  };


});