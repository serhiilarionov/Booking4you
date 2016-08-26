'use strict';

angular.module('app.log').controller('NotifiesController', function (Notify) {
  var vm = this;

  //UI settings
  vm.UI = {
    notifiesTableSettings: {
      name: 'notifiesTable',
      title: 'Уведомления',
      resource: Notify,
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
          dataField: 'clientId',
          title: '№ получателя',
          dataType: 'number',
          editorType: 'number',
          required: true
        },
        {
          dataField: 'name',
          title: 'Название',
          required: true
        },
        {
          dataField: 'type',
          title: 'Тип',
          required: true
        },
        {
          dataField: 'proccess',
          title: 'Процесс',
          required: true
        },
        {
          dataField: 'data',
          title: 'Данные',
          required: true
        }
      ]
    }
  };
});