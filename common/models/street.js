module.exports = function(Street) {

  Street.disableRemoteMethod("create", false);
  Street.disableRemoteMethod("upsert", false);
  Street.disableRemoteMethod("updateAll", false);
  Street.disableRemoteMethod("updateAttributes", false);

  Street.disableRemoteMethod("find", false);
  Street.disableRemoteMethod("findById", false);
  Street.disableRemoteMethod("findOne", false);

  Street.disableRemoteMethod("deleteById", false);

  Street.disableRemoteMethod("confirm", true);
  Street.disableRemoteMethod("count", false);
  Street.disableRemoteMethod("exists", false);
  Street.disableRemoteMethod("resetPassword", true);

  Street.disableRemoteMethod("createChangeStream", true);

  Street.disableRemoteMethod('__count__accessTokens', false);
  Street.disableRemoteMethod('__create__accessTokens', false);
  Street.disableRemoteMethod('__delete__accessTokens', false);
  Street.disableRemoteMethod('__destroyById__accessTokens', false);
  Street.disableRemoteMethod('__findById__accessTokens', false);
  Street.disableRemoteMethod('__get__accessTokens', false);
  Street.disableRemoteMethod('__updateById__accessTokens', false);

};
