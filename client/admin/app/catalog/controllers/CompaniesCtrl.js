'use strict';

angular.module('app.catalog').controller('CompaniesController', function ($state, $stateParams, Company,
                                                                          Category, City, District, Street) {
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
          dataField: 'cityId',
          title: 'ID города',
          dataType: 'number',
          editorType: 'selectBox',
          editorOptions: {
            dataSource: City.find(),
            value: 'id',
            caption: 'name'
          }
        },
        {
          dataField: 'districtId',
          title: 'ID района',
          dataType: 'number',
          editorType: 'selectBox',
          editorOptions: {
            dataSource: District.find(),
            value: 'id',
            caption: 'name'
          }
        },
        {
          dataField: 'streetId',
          title: 'ID улицы',
          dataType: 'number',
          editorType: 'selectBox',
          editorOptions: {
            dataSource: Street.find(),
            value: 'id',
            caption: 'name'
          }
        },
        {
          dataField: 'point',
          title: 'Point',
          editorType: 'points'
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
        $state.go('app.catalog.companyDetails', {
          id: aData.id,
          previousState: 'app.catalog.companies'
        })
      }
    }
  };


});