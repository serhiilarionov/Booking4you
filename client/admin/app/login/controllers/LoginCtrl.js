'use strict';

angular.module('app.login').controller('LoginController', function ($state, Client) {
  var vm = this;
  vm.email = null;
  vm.password = null;
  vm.loginError = '';

  vm.singIn = function () {
    Client.login({
      email: vm.email,
      password: vm.password
    }).$promise
      .then(function() {
        window.location.href = '/admin';
      })
      .catch(function (err) {
        vm.loginError = err.data.error.message;
      })
  };

  vm.logOut = function () {
    delete localStorage.$LoopBack$accessTokenId;
    delete localStorage.$LoopBack$currentUserId;
    delete localStorage.$LoopBack$rememberMe;
    window.location.href = '/admin';
  }

});