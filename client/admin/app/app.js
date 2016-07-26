'use strict';

/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */

angular.module('app', [
  'ngSanitize',
  'ngAnimate',
  'restangular',
  'ui.router',
  'ui.bootstrap',
  'datatables',
  'customElements',
  'lbServices',
  'uiGmapgoogle-maps',

  // Smartadmin Angular Common Module
  'SmartAdmin',
  'SmartAdmin.Layout',

  // App
  'app.layout',
  'app.catalog',
  'app.home',
  'app.locations',
  'app.login'
])
  .config(function ($provide, $httpProvider, RestangularProvider, uiGmapGoogleMapApiProvider) {

    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyBRMg-e1qUCEoSeD8A-NLSQZ3_QKjFJjEU',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });

    // Intercept http calls.
    $provide.factory('ErrorHttpInterceptor', function ($q) {
      var errorCounter = 0;

      function notifyError(rejection) {
        console.log(rejection);
      }

      return {
        // On request failure
        requestError: function (rejection) {
          // show notification
          notifyError(rejection);

          // Return the promise rejection.
          return $q.reject(rejection);
        },

        // On response failure
        responseError: function (rejection) {
          // show notification
          notifyError(rejection);
          // Return the promise rejection.
          return $q.reject(rejection);
        }
      };
    });

    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('ErrorHttpInterceptor');

    RestangularProvider.setBaseUrl(location.pathname.replace(/[^\/]+?$/, ''));

  })
  .constant('APP_CONFIG', window.appConfig)
  .constant('API_VERSION', 1)

  .run(function ($rootScope, $state, $stateParams, User) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.$on('$stateChangeSuccess',
      function (event, toState, toParams) {
        if (!toParams.noLogin) {
          if (!User.isAuthenticated()) {
            $state.go('app.login');
          }
        }
      }
    );

  })

  .directive('ngEnter', function () {
    return function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if (event.which === 13) {
          scope.$apply(function () {
            scope.$eval(attrs.ngEnter);
          });

          event.preventDefault();
        }
      });
    };
  });


