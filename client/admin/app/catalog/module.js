"use strict";


angular.module('app.catalog', ['ui.router'])
  .config(function ($stateProvider) {

    $stateProvider
      .state('app.catalog', {
        abstract: true,
        data: {
          title: 'Catalog'
        }
      })
      .state('app.catalog.categories', {
        url: '/catalog/categories?{filter}',
        params : {
          previousState: null
        },
        data: {
          title: 'Categories'
        },
        views: {
          "content@app": {
            controller: 'CategoriesController as categories',
            templateUrl: "app/catalog/views/categories.html"
          }
        }
      })
      .state('app.catalog.companies', {
        url: '/catalog/companies?{filter}',
        params : {
          previousState: null
        },
        data: {
          title: 'Companies'
        },
        views: {
          "content@app": {
            controller: 'CompaniesController as companies',
            templateUrl: "app/catalog/views/companies.html"
          }
        }
      })
      .state('app.catalog.companyServices', {
        url: '/catalog/company/:id/services?{filter}',
        params : {
          previousState: null
        },
        data: {
          title: 'Company services'
        },
        views: {
          "content@app": {
            controller: 'CompanyServicesController as companyServices',
            templateUrl: "app/catalog/views/company.services.html"
          }
        }
      })
      .state('app.catalog.companyDetails', {
        url: '/company/companies/:id/details?{filter}',
        params : {
          previousState: null
        },
        data: {
          title: 'Company details'
        },
        resolve: {
          details: function (CompanyDetail, $stateParams) {
            return CompanyDetail.find({"filter": {"where": {"companyId": $stateParams.id}}})
              .$promise
              .then(function (res) {
                return res;
              });
          }
        },
        views: {
          "content@app": {
            controller: 'CompanyDetailsController as companyDetails',
            templateUrl: "app/catalog/views/company.details.html"
          }
        }
      })
  });
