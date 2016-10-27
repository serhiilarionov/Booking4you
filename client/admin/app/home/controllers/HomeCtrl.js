'use strict';

angular.module('app.home').controller('HomeController', function (Client, Account, AppAuth, $cookies, socket, $state) {
  var vm = this;
  vm.Client = Client;

  if (AppAuth.currentUser === null) {
    if ($cookies.get('access_token')) {
      vm.currentUser =
        AppAuth.currentUser = { id: 'social' };
    }
  }

  AppAuth.ensureHasCurrentUser()
    .then(function(user) {
      if(user) {
        vm.currentUser = AppAuth.currentUser = user;
        $state.go('app.home');
      }
      vm.isAuthenticated = Client.isAuthenticated();
    })
    .catch(function(error){
      console.log(error);
    });
});