module.exports = function(StreetType) {

  StreetType.disableRemoteMethod("create", false);
  StreetType.disableRemoteMethod("upsert", false);
  StreetType.disableRemoteMethod("updateAll", false);
  StreetType.disableRemoteMethod("updateAttributes", false);

  StreetType.disableRemoteMethod("find", false);
  StreetType.disableRemoteMethod("findById", false);
  StreetType.disableRemoteMethod("findOne", false);

  StreetType.disableRemoteMethod("deleteById", false);

  StreetType.disableRemoteMethod("confirm", true);
  StreetType.disableRemoteMethod("count", false);
  StreetType.disableRemoteMethod("exists", false);
  StreetType.disableRemoteMethod("resetPassword", true);

  StreetType.disableRemoteMethod("createChangeStream", true);

  StreetType.disableRemoteMethod('__count__accessTokens', false);
  StreetType.disableRemoteMethod('__create__accessTokens', false);
  StreetType.disableRemoteMethod('__delete__accessTokens', false);
  StreetType.disableRemoteMethod('__destroyById__accessTokens', false);
  StreetType.disableRemoteMethod('__findById__accessTokens', false);
  StreetType.disableRemoteMethod('__get__accessTokens', false);
  StreetType.disableRemoteMethod('__updateById__accessTokens', false);

};
