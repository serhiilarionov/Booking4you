module.exports = function(Client) {

  Client.disableRemoteMethod("create", false);
  Client.disableRemoteMethod("upsert", false);
  Client.disableRemoteMethod("updateAll", false);
  Client.disableRemoteMethod("updateAttributes", false);

  Client.disableRemoteMethod("find", false);
  Client.disableRemoteMethod("findById", false);
  Client.disableRemoteMethod("findOne", false);

  Client.disableRemoteMethod("deleteById", false);

  Client.disableRemoteMethod("confirm", true);
  Client.disableRemoteMethod("count", false);
  Client.disableRemoteMethod("exists", false);
  Client.disableRemoteMethod("resetPassword", true);

  Client.disableRemoteMethod("createChangeStream", true);

  Client.disableRemoteMethod('__count__accessTokens', false);
  Client.disableRemoteMethod('__create__accessTokens', false);
  Client.disableRemoteMethod('__delete__accessTokens', false);
  Client.disableRemoteMethod('__destroyById__accessTokens', false);
  Client.disableRemoteMethod('__findById__accessTokens', false);
  Client.disableRemoteMethod('__get__accessTokens', false);
  Client.disableRemoteMethod('__updateById__accessTokens', false);

};
