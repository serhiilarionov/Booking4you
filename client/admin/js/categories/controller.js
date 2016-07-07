'use strict';

angular
  .module('app')
  .controller('CategoriesController', ['$scope', '$state', 'Category', function($scope, $state, Category) {
    $scope.categories = [];
    function getCategories() {
      Category
        .find()
        .$promise
        .then(function(results) {
          $scope.categories = results;
        });
    }
    getCategories();

    $scope.addTodo = function() {
      Todo
        .create($scope.newTodo)
        .$promise
        .then(function(todo) {
          $scope.newTodo = '';
          $scope.todoForm.content.$setPristine();
          $('.focus').focus(); //JQuery hack for refocusing text input
          getTodos();
        });
    };

    $scope.removeTodo = function(item) {
      Todo
        .deleteById(item)
        .$promise
        .then(function() {
          getTodos();
        });
    };
  }]);