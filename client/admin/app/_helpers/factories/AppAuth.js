angular.module('helpers')
  .factory('AppAuth', function ($q, Account, Client) {
    return {
      currentUser: null,
      ensureHasCurrentUser: function () {
        var deferred = $q.defer();
        if (this.currentUser) {
          if (this.currentUser.id === 'social') {
            return Account.getAccount()
          }
          else {
            deferred.resolve();
          }
        } else {
          this.currentUser = Client.getCurrent(function () {
            deferred.resolve();
          }, function (response) {
            console.log('Client.getCurrent() err', arguments);
            deferred.reject(response);
          });
        }
        return deferred.promise;
      }
    };
  });