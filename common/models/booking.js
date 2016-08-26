var pubsub = require('../../server/pubsub.js');

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

  Booking.observe('after save', function (ctx, next) {
    var socket = Booking.app.io;
    if(ctx.isNewInstance){
      //Now publishing the data..
      pubsub.publish(socket, {
        collectionName : 'Booking',
        data: ctx.instance,
        method: 'POST'
      });
    }else{
      //Now publishing the data..
      pubsub.publish(socket, {
        collectionName : 'Booking',
        data: ctx.instance,
        modelId: ctx.instance.id,
        method: 'PUT'
      });
    }
    //Calling the next middleware..
    next();
  });
  Booking.observe("before delete", function(ctx, next){
    var socket = Booking.app.io;
    //Now publishing the data..
    pubsub.publish(socket, {
      collectionName : 'Booking',
      data: ctx.where.id,
      modelId: ctx.where.id,
      method: 'DELETE'
    });
    //move to next middleware..
    next();
  });
};
