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
      .state('app.booking.add', {
        url: '/booking/bookings?{filter}',
        params : {
          previousState: null
        },
        data: {
          title: 'Bookings'
        },
        views: {
          "content@app": {
            controller: 'BookingController as booking',
            templateUrl: "app/booking/views/booking.html"
          }
        },
        onExit: unSubscribeAll
      })
  });

var unSubscribeAll = function(PubSub){
  //Unsubscribe all listeners..
  PubSub.unSubscribeAll();
};