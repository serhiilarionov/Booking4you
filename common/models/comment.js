module.exports = function(Commant) {

  Commant.disableRemoteMethod("create", false);
  Commant.disableRemoteMethod("upsert", false);
  Commant.disableRemoteMethod("updateAll", false);
  Commant.disableRemoteMethod("updateAttributes", false);

  Commant.disableRemoteMethod("find", false);
  Commant.disableRemoteMethod("findById", false);
  Commant.disableRemoteMethod("findOne", false);

  Commant.disableRemoteMethod("deleteById", false);

  Commant.disableRemoteMethod("confirm", true);
  Commant.disableRemoteMethod("count", false);
  Commant.disableRemoteMethod("exists", false);
  Commant.disableRemoteMethod("resetPassword", true);

  Commant.disableRemoteMethod("createChangeStream", true);

  Commant.disableRemoteMethod('__count__accessTokens', false);
  Commant.disableRemoteMethod('__create__accessTokens', false);
  Commant.disableRemoteMethod('__delete__accessTokens', false);
  Commant.disableRemoteMethod('__destroyById__accessTokens', false);
  Commant.disableRemoteMethod('__findById__accessTokens', false);
  Commant.disableRemoteMethod('__get__accessTokens', false);
  Commant.disableRemoteMethod('__updateById__accessTokens', false);

};
