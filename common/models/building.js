module.exports = function(Building) {

  Building.disableRemoteMethod("create", false);
  Building.disableRemoteMethod("upsert", false);
  Building.disableRemoteMethod("updateAll", false);
  Building.disableRemoteMethod("updateAttributes", false);

  Building.disableRemoteMethod("find", false);
  Building.disableRemoteMethod("findById", false);
  Building.disableRemoteMethod("findOne", false);

  Building.disableRemoteMethod("deleteById", false);

  Building.disableRemoteMethod("confirm", true);
  Building.disableRemoteMethod("count", false);
  Building.disableRemoteMethod("exists", false);
  Building.disableRemoteMethod("resetPassword", true);

  Building.disableRemoteMethod("createChangeStream", true);

  Building.disableRemoteMethod('__count__accessTokens', false);
  Building.disableRemoteMethod('__create__accessTokens', false);
  Building.disableRemoteMethod('__delete__accessTokens', false);
  Building.disableRemoteMethod('__destroyById__accessTokens', false);
  Building.disableRemoteMethod('__findById__accessTokens', false);
  Building.disableRemoteMethod('__get__accessTokens', false);
  Building.disableRemoteMethod('__updateById__accessTokens', false);

};
