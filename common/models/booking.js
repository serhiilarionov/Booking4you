module.exports = function(Booking) {

  Booking.disableRemoteMethod("create", false);
  Booking.disableRemoteMethod("upsert", false);
  Booking.disableRemoteMethod("updateAll", false);
  Booking.disableRemoteMethod("updateAttributes", false);

  Booking.disableRemoteMethod("find", false);
  Booking.disableRemoteMethod("findById", false);
  Booking.disableRemoteMethod("findOne", false);

  Booking.disableRemoteMethod("deleteById", false);

  Booking.disableRemoteMethod("confirm", true);
  Booking.disableRemoteMethod("count", false);
  Booking.disableRemoteMethod("exists", false);
  Booking.disableRemoteMethod("resetPassword", true);

  Booking.disableRemoteMethod("createChangeStream", true);

  Booking.disableRemoteMethod('__count__accessTokens', false);
  Booking.disableRemoteMethod('__create__accessTokens', false);
  Booking.disableRemoteMethod('__delete__accessTokens', false);
  Booking.disableRemoteMethod('__destroyById__accessTokens', false);
  Booking.disableRemoteMethod('__findById__accessTokens', false);
  Booking.disableRemoteMethod('__get__accessTokens', false);
  Booking.disableRemoteMethod('__updateById__accessTokens', false);

};
