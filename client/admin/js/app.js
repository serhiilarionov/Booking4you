'use strict';

angular
  .module('app', [
    'ui.router',
    'lbServices'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('categories', {
        url: '',
        templateUrl: 'js/categories/categories.html',
        controller: 'CategoriesController',
        resolve: {
          user: function(User) {
            return User.login({
              email: 'qwe@qwe.qwe',
              password: 'qweqwe'
            })
          }
        }
      });
    $urlRouterProvider.otherwise('categories');
  }]);