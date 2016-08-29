"use strict";

angular.module('app.booking', ['ui.router'])
  .config(function ($stateProvider) {

    $stateProvider
      .state('app.booking', {
        abstract: true,
        data: {
          title: 'Booking'
        }
      })
      .state('app.booking.active', {
        url: '/booking/bookings/active/?{filter}',
        params : {
          previousState: null
        },
        data: {
          title: 'ActiveBookings'
        },
        views: {
          "content@app": {
            controller: 'ActiveBookingsController as activeBookings',
            templateUrl: "app/booking/views/activeBookings.html"
          }
        },
        onExit: unSubscribeAll
      })
      .state('app.booking.unprocessed', {
        url: '/booking/bookings/unprocessed?{filter}',
        params : {
          previousState: null
        },
        data: {
          title: 'UnprocessedBookings'
        },
        views: {
          "content@app": {
            controller: 'UnprocessedBookingsController as unprocessedBookings',
            templateUrl: "app/booking/views/unprocessedBookings.html"
          }
        },
        onExit: unSubscribeAll
      })
  });

var unSubscribeAll = function(PubSub){
  //Unsubscribe all listeners..
  PubSub.unSubscribeAll();
};