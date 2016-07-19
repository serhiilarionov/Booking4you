'use strict';

angular.module('app.catalog').controller('CategoriesController', function (Category, categories) {
  var vm = this;

  //UI settings
  vm.UI = {
    categoriesTableSettings: {
      name: 'categoriesTable',
      title: 'Категории',
      resource: Category,
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
          dataField: 'slug',
          title: 'Slug',
          required: true
        },
        {
          dataField: 'parentId',
          title: 'ID родителя',
          dataType: 'number',
          editorType: 'selectBox',
          editorOptions: {
            dataSource: categories,
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
          dataType: 'number',
          editorType: 'number',
          required: true
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