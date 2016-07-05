module.exports = function(Country) {

  Country.disableRemoteMethod("create", false);
  Country.disableRemoteMethod("upsert", false);
  Country.disableRemoteMethod("updateAll", false);
  Country.disableRemoteMethod("updateAttributes", false);

  Country.disableRemoteMethod("find", false);
  Country.disableRemoteMethod("findById", false);
  Country.disableRemoteMethod("findOne", false);

  Country.disableRemoteMethod("deleteById", false);

  Country.disableRemoteMethod("confirm", true);
  Country.disableRemoteMethod("count", false);
  Country.disableRemoteMethod("exists", false);
  Country.disableRemoteMethod("resetPassword", true);

  Country.disableRemoteMethod("createChangeStream", true);

  Country.disableRemoteMethod('__count__accessTokens', false);
  Country.disableRemoteMethod('__create__accessTokens', false);
  Country.disableRemoteMethod('__delete__accessTokens', false);
  Country.disableRemoteMethod('__destroyById__accessTokens', false);
  Country.disableRemoteMethod('__findById__accessTokens', false);
  Country.disableRemoteMethod('__get__accessTokens', false);
  Country.disableRemoteMethod('__updateById__accessTokens', false);

};
