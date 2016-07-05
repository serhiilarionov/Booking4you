module.exports = function(District) {

  District.disableRemoteMethod("create", false);
  District.disableRemoteMethod("upsert", false);
  District.disableRemoteMethod("updateAll", false);
  District.disableRemoteMethod("updateAttributes", false);

  District.disableRemoteMethod("find", false);
  District.disableRemoteMethod("findById", false);
  District.disableRemoteMethod("findOne", false);

  District.disableRemoteMethod("deleteById", false);

  District.disableRemoteMethod("confirm", true);
  District.disableRemoteMethod("count", false);
  District.disableRemoteMethod("exists", false);
  District.disableRemoteMethod("resetPassword", true);

  District.disableRemoteMethod("createChangeStream", true);

  District.disableRemoteMethod('__count__accessTokens', false);
  District.disableRemoteMethod('__create__accessTokens', false);
  District.disableRemoteMethod('__delete__accessTokens', false);
  District.disableRemoteMethod('__destroyById__accessTokens', false);
  District.disableRemoteMethod('__findById__accessTokens', false);
  District.disableRemoteMethod('__get__accessTokens', false);
  District.disableRemoteMethod('__updateById__accessTokens', false);
  
};
