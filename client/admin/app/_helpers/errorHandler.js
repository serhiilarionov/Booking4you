angular.module('helpers')
  .service('ErrorHandler', function (Notification) {
    this.serverResponse = function (err) {
      Notification.error(err.data.error.message, 'Server error!');
    }
  });