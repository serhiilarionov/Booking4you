"use strict";


angular.module('app.company', ['ui.router'])
  .config(function ($stateProvider) {

    $stateProvider
      .state('app.company', {
        abstract: true,
        data: {
          title: 'Company'
        }
      })
      .state('app.company.add', {
        url: '/company/companies?{filter}',
        params : {
          previousState: null
        },
        data: {
          title: 'Company'
        },
        views: {
          "content@app": {
            controller: 'AddingCompanyController as addingCompany',
            templateUrl: "app/company/views/addingCompany.html"
          }
        }
      })
  });
