'use strict';

angular.module('app.booking').controller('ActiveBookingsController', function ($scope, $state, $stateParams, $http,
                                                                               Booking, Category, City, Street, Core,
                                                                               Notification, PubSub, socket) {
  var vm = this;
  vm.newBooking = {};

  socket.on('/notify/' + localStorage.$LoopBack$currentUserId, function (params) {
    Notification[params.type](params.name, params.process);
  });

  Booking.find({"filter": {"where": {"active": true}}})
    .$promise
    .then(function (bookings) {
      bookings.forEach(function (booking) {
        booking.date = booking.date ? new Date(booking.date) : null;
      });
      vm.bookings = bookings;
      PubSub.subscribe({
        collectionName: 'Booking',
        method: 'POST'
      }, onBookingCreate);

      for (var i = 0; i < bookings.length; i++) {
        PubSub.subscribe({
          collectionName: 'Booking',
          method: 'PUT',
          modelId: bookings[i].taskId
        }, onBookingUpdate);

        PubSub.subscribe({
          collectionName: 'Booking',
          method: 'DELETE',
          modelId: bookings[i].taskId
        }, onBookingDelete);
      }
    });

  var onBookingCreate = function (booking) {
    PubSub.subscribe({
      collectionName: 'Booking',
      method: 'PUT',
      modelId: booking.taskId
    }, onBookingUpdate);

    PubSub.subscribe({
      collectionName: 'Booking',
      method: 'DELETE',
      modelId: booking.taskId
    }, onBookingDelete);
    if (booking.active) {
      vm.bookings.push(booking);
    }
  };

  var onBookingUpdate = function (booking) {
    booking.date = booking.date ? new Date(booking.date) : null;
    vm.bookings.splice(vm.selectedIndex, 1, booking);
  };

  var onBookingDelete = function (deletedId) {
    var index = vm.bookings.findIndex(function (booking) {
      return deletedId == booking.taskId
    });
    vm.bookings.splice(index, 1);
  };

  vm.addNewRow = function () {
    Booking.create(vm.newBooking)
      .$promise
      .then(function () {
        return $http.post('/corezoid?access_token=' + localStorage.$LoopBack$accessTokenId)
      })
      .then(function () {
        angular.element('#bookingNewRowModal').modal('hide');
        Notification.success();
      })
      .catch(function (err) {
        Notification.error("Error", err.data.error.message);
      });
  };

  vm.editRow = function () {
    Booking.upsert({id: vm.selectedBooking.id}, vm.selectedBooking)
      .$promise
      .then(function () {
        angular.element('#bookingEditRowModal').modal('hide');
        Notification.success();
      })
      .catch(function (err) {
        Notification.error("Error", err.data.error.message);
      });
  };

  vm.onStartEditing = function (selectedIndex) {
    vm.selectedBooking = angular.copy(vm.bookings[selectedIndex]);
    vm.selectedIndex = selectedIndex;
  };

  vm.bookingDelete = function (selectedIndex) {
    Booking.destroyById({"id": vm.bookings[selectedIndex].id})
      .$promise
      .then(function () {
        Notification.success();
      })
      .catch(function (err) {
        Notification.error("Error", err.data.error.message);
      });
  };

  vm.changeStatus = function (selectedIndex, status) {
    vm.selectedBooking = angular.copy(vm.bookings[selectedIndex]);
    vm.selectedBooking.status = status;
    vm.selectedIndex = selectedIndex;

    Booking.upsert({id: vm.selectedBooking.id}, vm.selectedBooking)
      .$promise
      .then(function (booking) {
        return Core.bookingStatusUpdate({
          taskId: booking.taskId,
          status: status
        })
          .$promise
      })
      .then(function () {
        Notification.success();
      })
      .catch(function (err) {
        Notification.error("Error", err.data.error.message);
      });
  }
});