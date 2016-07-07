"use strict";


angular.module('app.locations', ['ui.router'])
  .config(function ($stateProvider) {

    $stateProvider
      .state('app.locations', {
        abstract: true,
        data: {
          title: 'Catalog'
        }
      })
      .state('app.locations.countries', {
        url: '/locations/countries',
        data: {
          title: 'Countries'
        },
        views: {
          "content@app": {
            controller: 'CountriesController as countries',
            templateUrl: "app/locations/views/countries.html"
          }
        }
      })
      .state('app.locations.regions', {
        url: '/locations/regions',
        data: {
          title: 'Regions'
        },
        views: {
          "content@app": {
            controller: 'RegionsController as regions',
            templateUrl: "app/locations/views/regions.html",
            resolve: {
              countries: function (Countries) {
                return Countries.list();
              }
            }
          }
        }
      })
      .state('app.locations.cities', {
        url: '/locations/cities',
        data: {
          title: 'Cities'
        },
        views: {
          "content@app": {
            controller: 'CitiesController as cities',
            templateUrl: "app/locations/views/cities.html",
            resolve: {
              regions: function (Regions) {
                return Regions.list();
              }
            }
          }
        }
      })
      .state('app.locations.districts', {
        url: '/locations/districts',
        data: {
          title: 'Districts'
        },
        views: {
          "content@app": {
            controller: 'DistrictsController as districts',
            templateUrl: "app/locations/views/districts.html",
            resolve: {
              cities: function (Cities) {
                return Cities.list();
              }
            }
          }
        }
      })
      .state('app.locations.streets', {
        url: '/locations/streets',
        data: {
          title: 'Streets'
        },
        views: {
          "content@app": {
            controller: 'StreetsController as streets',
            templateUrl: "app/locations/views/streets.html",
            resolve: {
              cities: function (Cities) {
                return Cities.list();
              },
              districts: function (Districts) {
                return Districts.list();
              }
            }
          }
        }
      })
      .state('app.locations.buildings', {
        url: '/locations/buildings',
        data: {
          title: 'Buildings'
        },
        views: {
          "content@app": {
            controller: 'BuildingsController as buildings',
            templateUrl: "app/locations/views/buildings.html",
            resolve: {
              streets: function (Streets) {
                return Streets.list();
              }
            }
          }
        }
      })
  });
