'use strict';

angular.module('app.booking').controller('UnprocessedBookingsController', function ($scope, $state, $stateParams, $http,
                                                                                    Booking, Category, City, Street,
                                                                                    Core, Notification, PubSub, socket) {
  var vm = this;
  vm.newBooking = {};

  socket.on('/notify/' + localStorage.$LoopBack$currentUserId, function (params) {
    Notification[params.type](params.name, params.process);
  });

  Booking.find({"filter": {"where": {"status": null}}})
    .$promise
    .then(function (bookings) {
      vm.bookings = bookings;
    });

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
      }, onBookingUpdate);

      PubSub.subscribe({
        collectionName: 'Booking',
        method: 'DELETE',
        modelId: res[i].id
      }, onBookingDelete);
    }
  });

  var onBookingCreate = function (booking) {
    PubSub.subscribe({
      collectionName: 'Booking',
      method: 'PUT',
      modelId: booking.id
    }, onBookingUpdate);

    PubSub.subscribe({
      collectionName: 'Booking',
      method: 'DELETE',
      modelId: booking.id
    }, onBookingDelete);
    if (!booking.status) {
      vm.bookings.push(booking);
    }
  };

  var onBookingUpdate = function (booking) {
    vm.bookings.splice(vm.selectedIndex, 1, booking);
  };

  var onBookingDelete = function (deletedId) {
    var index = vm.bookings.findIndex(function (booking) {
      return deletedId == booking.id
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
  
  vm.changeStatus = function(selectedIndex, status) {
    vm.selectedBooking = angular.copy(vm.bookings[selectedIndex]);
    vm.selectedBooking.status = status;
    Booking.upsert({id: vm.selectedBooking.id}, vm.selectedBooking)
      .$promise
      .then(function (booking) {
        return Core.bookingStatusUpdate(booking.taskId, booking.status)
          .$promise
      })
      .then(function(){
        Notification.success();
      })
      .catch(function (err) {
        Notification.error("Error", err.data.error.message);
      });
  }
});