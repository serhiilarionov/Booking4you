"use strict";


angular.module('app.login', [])
  .config(function ($stateProvider) {

    $stateProvider
      .state('app.login', {
        url: '/login',
        params : {
          noLogin: true,
          previousState: null
        },
        data: {
          title: 'Login'
        },
        views: {
          "content@app": {
            controller: 'LoginController as login',
            templateUrl: "app/login/views/login.html"
          }
        }
      })
  });
