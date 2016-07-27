'use strict';

angular.module('app.home').controller('HomeController', function (User) {
  var vm = this;
  vm.User = User;
  vm.isAuthenticated = User.isAuthenticated();
});