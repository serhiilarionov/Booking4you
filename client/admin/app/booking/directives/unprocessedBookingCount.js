"use strict";


angular.module('app.booking').directive('unprocessedBookingCount', function ($rootScope, Booking, PubSub) {
  return {
    restrict: 'A',
    scope: true,
    template: '<span ng-bind="unprocessedCount"></span>',
    controller: function ($scope, socket, Booking) {
      var onBookingLengthChange = function () {
        Booking.count({"where": {"status": null}})
          .$promise
          .then(function (bookings) {
            $scope.unprocessedCount = bookings.count;
          });
      };

      var onBookingCreate = function (booking) {
        PubSub.subscribe({
          collectionName: 'Booking',
          method: 'PUT',
          modelId: booking.id
        }, onBookingLengthChange);

        PubSub.subscribe({
          collectionName: 'Booking',
          method: 'DELETE',
          modelId: booking.id
        }, onBookingLengthChange);
        onBookingLengthChange();
      };


      Booking.find({}, function (res) {
        PubSub.subscribe({
          collectionName: 'Booking',
          method: 'POST'
        }, onBookingCreate);

        for (var i = 0; i < res.length; i++) {
          PubSub.subscribe({
            collectionName: 'Booking',
            method: 'PUT',
            modelId: res[i].id
          }, onBookingLengthChange);

          PubSub.subscribe({
            collectionName: 'Booking',
            method: 'DELETE',
            modelId: res[i].id
          }, onBookingLengthChange);
        }

        onBookingLengthChange();
      });
    }
  }
});
