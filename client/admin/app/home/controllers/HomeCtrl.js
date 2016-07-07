'use strict';

angular.module('app.home').controller('HomeController', function ($scope, User) {
  User.login({
    email: 'test@test.test',
    password: 'test'
  })
});