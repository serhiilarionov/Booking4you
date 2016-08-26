"use strict";


angular.module('app.log', ['ui.router'])
  .config(function ($stateProvider) {

    $stateProvider
      .state('app.log', {
        abstract: true,
        data: {
          title: 'Log'
        }
      })
      .state('app.log.notifies', {
        url: '/log/notifies?{filter}',
        params : {
          previousState: null
        },
        data: {
          title: 'Notifies'
        },
        views: {
          "content@app": {
            controller: 'NotifiesController as notifies',
            templateUrl: "app/log/views/notifies.html"
          }
        }
      })
      .state('app.log.smsLogs', {
        url: '/log/smsLogs?{filter}',
        params : {
          previousState: null
        },
        data: {
          title: 'SmsLogs'
        },
        views: {
          "content@app": {
            controller: 'SmsLogsController as smsLogs',
            templateUrl: "app/log/views/smsLogs.html"
          }
        }
      })
  });
