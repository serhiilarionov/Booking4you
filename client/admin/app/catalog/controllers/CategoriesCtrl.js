'use strict';

angular.module('app.catalog').controller('CategoriesController', function () {
  var vm = this;

  //UI settings
  vm.UI = {
    categoriesTableSettings: {
      name: 'categoriesTable',
      title: 'Категории',
      apiUrl: '/categories',
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
          dataField: 'slug',
          title: 'Slug',
          required: true
        },
        {
          dataField: 'parent_id',
          title: 'ID родителя',
          editorType: 'selectBox',
          editorOptions: {
            dataSourceString: 'dataListArray',
            value: 'id',
            caption: 'name'
          }
        },
        {
          dataField: 'icon',
          title: 'Иконка'
        },
        {
          dataField: 'position',
          title: 'Позиция',
          required: true,
          editorType: 'number'
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