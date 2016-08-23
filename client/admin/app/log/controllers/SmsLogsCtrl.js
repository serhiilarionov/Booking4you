'use strict';

angular.module('app.log').controller('SmsLogsController', function (SmsLogs) {
  var vm = this;

  //UI settings
  vm.UI = {
    smsLogsTableSettings: {
      name: 'smsLogsTable',
      title: 'SMS',
      resource: SmsLogs,
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
          dataField: 'status',
          title: 'Статус',
          dataType: 'number',
          editorType: 'number',
          required: true
        },
        {
          dataField: 'phone',
          title: 'Телефон',
          required: true
        },
        {
          dataField: 'message',
          title: 'Сообщение',
          required: true
        },
        {
          dataField: 'error',
          title: 'Ошибка'
        }
      ]
    }
  };
});