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
            templateUrl: "app/catalog/views/categories.html",
            resolve: {
              categories: function (Category) {
                return Category.find();
              }
            }
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
            templateUrl: "app/catalog/views/companies.html",
            resolve: {
              categories: function (Category) {
                return Category.find();
              }
            }
          }
        }
      })
  });
