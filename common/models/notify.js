module.exports = function(Notify) {

  Notify.disableRemoteMethod("create", false);
  Notify.disableRemoteMethod("upsert", false);
  Notify.disableRemoteMethod("updateAll", false);
  Notify.disableRemoteMethod("updateAttributes", false);

  Notify.disableRemoteMethod("find", false);
  Notify.disableRemoteMethod("findById", false);
  Notify.disableRemoteMethod("findOne", false);

  Notify.disableRemoteMethod("deleteById", false);

  Notify.disableRemoteMethod("confirm", true);
  Notify.disableRemoteMethod("count", false);
  Notify.disableRemoteMethod("exists", false);
  Notify.disableRemoteMethod("resetPassword", true);

  Notify.disableRemoteMethod("createChangeStream", true);

  Notify.disableRemoteMethod('__count__accessTokens', false);
  Notify.disableRemoteMethod('__create__accessTokens', false);
  Notify.disableRemoteMethod('__delete__accessTokens', false);
  Notify.disableRemoteMethod('__destroyById__accessTokens', false);
  Notify.disableRemoteMethod('__findById__accessTokens', false);
  Notify.disableRemoteMethod('__get__accessTokens', false);
  Notify.disableRemoteMethod('__updateById__accessTokens', false);

};
