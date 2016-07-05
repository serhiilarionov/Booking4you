module.exports = function(City) {

  City.disableRemoteMethod("create", false);
  City.disableRemoteMethod("upsert", false);
  City.disableRemoteMethod("updateAll", false);
  City.disableRemoteMethod("updateAttributes", false);

  City.disableRemoteMethod("find", false);
  City.disableRemoteMethod("findById", false);
  City.disableRemoteMethod("findOne", false);

  City.disableRemoteMethod("deleteById", false);

  City.disableRemoteMethod("confirm", true);
  City.disableRemoteMethod("count", false);
  City.disableRemoteMethod("exists", false);
  City.disableRemoteMethod("resetPassword", true);

  City.disableRemoteMethod("createChangeStream", true);

  City.disableRemoteMethod('__count__accessTokens', false);
  City.disableRemoteMethod('__create__accessTokens', false);
  City.disableRemoteMethod('__delete__accessTokens', false);
  City.disableRemoteMethod('__destroyById__accessTokens', false);
  City.disableRemoteMethod('__findById__accessTokens', false);
  City.disableRemoteMethod('__get__accessTokens', false);
  City.disableRemoteMethod('__updateById__accessTokens', false);

};
