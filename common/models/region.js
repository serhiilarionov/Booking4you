module.exports = function(Region) {

  Region.disableRemoteMethod("create", false);
  Region.disableRemoteMethod("upsert", false);
  Region.disableRemoteMethod("updateAll", false);
  Region.disableRemoteMethod("updateAttributes", false);

  Region.disableRemoteMethod("find", false);
  Region.disableRemoteMethod("findById", false);
  Region.disableRemoteMethod("findOne", false);

  Region.disableRemoteMethod("deleteById", false);

  Region.disableRemoteMethod("confirm", true);
  Region.disableRemoteMethod("count", false);
  Region.disableRemoteMethod("exists", false);
  Region.disableRemoteMethod("resetPassword", true);

  Region.disableRemoteMethod("createChangeStream", true);

  Region.disableRemoteMethod('__count__accessTokens', false);
  Region.disableRemoteMethod('__create__accessTokens', false);
  Region.disableRemoteMethod('__delete__accessTokens', false);
  Region.disableRemoteMethod('__destroyById__accessTokens', false);
  Region.disableRemoteMethod('__findById__accessTokens', false);
  Region.disableRemoteMethod('__get__accessTokens', false);
  Region.disableRemoteMethod('__updateById__accessTokens', false);
  
};
