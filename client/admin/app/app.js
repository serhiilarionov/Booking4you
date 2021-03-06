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
  'ngCookies',
  'restangular',
  'ui.router',
  'ui.bootstrap',
  'ui.select',
  'datatables',
  'customElements',
  'loopbackSockets',
  'lbServices',
  'customMethods',
  'uiGmapgoogle-maps',
  'angularFileUpload',

  // Smartadmin Angular Common Module
  'SmartAdmin',
  'SmartAdmin.Layout',

  // App
  'helpers',
  'app.layout',
  'app.catalog',
  'app.company',
  'app.home',
  'app.locations',
  'app.booking',
  'app.login',
  'app.log'
])
  .config(function ($provide, $httpProvider, RestangularProvider, uiGmapGoogleMapApiProvider) {

    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCrMSuk_VyW_1pjv2ObkESsP0Gil4OXXQ8',
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
  .constant('SERVER_URL', 'http://localhost:3000')
  .constant('API_VERSION', 1)

  .run(function ($rootScope, $state, $stateParams, Client) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.$on('$stateChangeSuccess',
      function (event, toState, toParams) {
        if (!toParams.noLogin) {
          if (!Client.isAuthenticated()) {
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


