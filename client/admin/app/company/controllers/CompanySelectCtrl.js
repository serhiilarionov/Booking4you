'use strict';

angular.module('app.catalog').controller('CompanySelectController', function ($state, $stateParams, Company,
                                                                          Category, City, District, Street) {
  var vm = this;

  //UI settings
  vm.UI = {
    companySelectTableSettings: {
      name: 'companySelectTable',
      title: 'Компании',
      resource: Company,
      buttons: {
        add: false,
        refresh: true,
        edit: false,
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
          dataField: 'point',
          title: 'Point',
          editorType: 'points'
        },
        {
          dataField: 'photo',
          title: 'Photo',
          editorType: 'photo'
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
        $state.transitionTo('app.company.verification', {
          id: aData.id
        })
      }
    }
  };


});