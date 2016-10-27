(function () {
  'use strict';

  angular.module("customMethods", ['ngResource'])
    .factory("Account",
      ['$http', '$cookies', 'LoopBackAuth',
        function ($http, $cookies, LoopBackAuth) {
          return {
            getAccount: function () {
              return $http({
                method: 'GET',
                url: '/auth/account'
              }).then(function (response) {
                if (response.data.id) {
                  var currentUserId = response.data.id;
                  var accessTokenId = $cookies.get('access_token').substring(2, 66);
                  LoopBackAuth.setUser(
                    accessTokenId, currentUserId, response.data);
                  LoopBackAuth.rememberMe = true;
                  LoopBackAuth.save();
                }
                if (LoopBackAuth.currentUserId === null) {
                  delete localStorage.$LoopBack$accessTokenId;
                  delete localStorage.$LoopBack$currentUserId;
                  delete localStorage.$LoopBack$rememberMe;
                }
                return response.data;
              })
            }
          }
        }]);
})();