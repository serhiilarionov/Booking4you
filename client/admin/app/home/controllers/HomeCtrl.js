'use strict';

angular.module('app.home').controller('HomeController', function ($scope, User) {
  User.login({
    email: 'admin@admin.com',
    password: 'admin'
  })
});