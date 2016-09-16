var pubsub = require('../../server/pubsub.js');

module.exports = function(BookingService) {

  BookingService.disableRemoteMethod("create", false);
  BookingService.disableRemoteMethod("upsert", false);
  BookingService.disableRemoteMethod("updateAll", false);
  BookingService.disableRemoteMethod("updateAttributes", false);

  BookingService.disableRemoteMethod("find", false);
  BookingService.disableRemoteMethod("findById", false);
  BookingService.disableRemoteMethod("findOne", false);

  BookingService.disableRemoteMethod("deleteById", false);

  BookingService.disableRemoteMethod("confirm", true);
  BookingService.disableRemoteMethod("count", false);
  BookingService.disableRemoteMethod("exists", false);
  BookingService.disableRemoteMethod("resetPassword", true);

  BookingService.disableRemoteMethod("createChangeStream", true);

  BookingService.disableRemoteMethod('__count__accessTokens', false);
  BookingService.disableRemoteMethod('__create__accessTokens', false);
  BookingService.disableRemoteMethod('__delete__accessTokens', false);
  BookingService.disableRemoteMethod('__destroyById__accessTokens', false);
  BookingService.disableRemoteMethod('__findById__accessTokens', false);
  BookingService.disableRemoteMethod('__get__accessTokens', false);
  BookingService.disableRemoteMethod('__updateById__accessTokens', false);
  
};
