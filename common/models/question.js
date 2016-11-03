module.exports = function(Question) {

  Question.disableRemoteMethod("create", false);
  Question.disableRemoteMethod("upsert", false);
  Question.disableRemoteMethod("updateAll", false);
  Question.disableRemoteMethod("updateAttributes", false);

  Question.disableRemoteMethod("find", false);
  Question.disableRemoteMethod("findById", false);
  Question.disableRemoteMethod("findOne", false);

  Question.disableRemoteMethod("deleteById", false);

  Question.disableRemoteMethod("confirm", true);
  Question.disableRemoteMethod("count", false);
  Question.disableRemoteMethod("exists", false);
  Question.disableRemoteMethod("resetPassword", true);

  Question.disableRemoteMethod("createChangeStream", true);

  Question.disableRemoteMethod('__count__accessTokens', false);
  Question.disableRemoteMethod('__create__accessTokens', false);
  Question.disableRemoteMethod('__delete__accessTokens', false);
  Question.disableRemoteMethod('__destroyById__accessTokens', false);
  Question.disableRemoteMethod('__findById__accessTokens', false);
  Question.disableRemoteMethod('__get__accessTokens', false);
  Question.disableRemoteMethod('__updateById__accessTokens', false);

};
