'use strict';

angular.module('app.home').controller('HomeController', function (Client) {
  var vm = this;
  vm.Client = Client;
  vm.isAuthenticated = Client.isAuthenticated();
});