module.exports = function(Favorite) {

  Favorite.disableRemoteMethod("create", false);
  Favorite.disableRemoteMethod("upsert", false);
  Favorite.disableRemoteMethod("updateAll", false);
  Favorite.disableRemoteMethod("updateAttributes", false);

  Favorite.disableRemoteMethod("find", false);
  Favorite.disableRemoteMethod("findById", false);
  Favorite.disableRemoteMethod("findOne", false);

  Favorite.disableRemoteMethod("deleteById", false);

  Favorite.disableRemoteMethod("confirm", true);
  Favorite.disableRemoteMethod("count", false);
  Favorite.disableRemoteMethod("exists", false);
  Favorite.disableRemoteMethod("resetPassword", true);

  Favorite.disableRemoteMethod("createChangeStream", true);

  Favorite.disableRemoteMethod('__count__accessTokens', false);
  Favorite.disableRemoteMethod('__create__accessTokens', false);
  Favorite.disableRemoteMethod('__delete__accessTokens', false);
  Favorite.disableRemoteMethod('__destroyById__accessTokens', false);
  Favorite.disableRemoteMethod('__findById__accessTokens', false);
  Favorite.disableRemoteMethod('__get__accessTokens', false);
  Favorite.disableRemoteMethod('__updateById__accessTokens', false);

};
