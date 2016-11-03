module.exports = function(CommentQuestion) {

  CommentQuestion.disableRemoteMethod("create", false);
  CommentQuestion.disableRemoteMethod("upsert", false);
  CommentQuestion.disableRemoteMethod("updateAll", false);
  CommentQuestion.disableRemoteMethod("updateAttributes", false);

  CommentQuestion.disableRemoteMethod("find", false);
  CommentQuestion.disableRemoteMethod("findById", false);
  CommentQuestion.disableRemoteMethod("findOne", false);

  CommentQuestion.disableRemoteMethod("deleteById", false);

  CommentQuestion.disableRemoteMethod("confirm", true);
  CommentQuestion.disableRemoteMethod("count", false);
  CommentQuestion.disableRemoteMethod("exists", false);
  CommentQuestion.disableRemoteMethod("resetPassword", true);

  CommentQuestion.disableRemoteMethod("createChangeStream", true);

  CommentQuestion.disableRemoteMethod('__count__accessTokens', false);
  CommentQuestion.disableRemoteMethod('__create__accessTokens', false);
  CommentQuestion.disableRemoteMethod('__delete__accessTokens', false);
  CommentQuestion.disableRemoteMethod('__destroyById__accessTokens', false);
  CommentQuestion.disableRemoteMethod('__findById__accessTokens', false);
  CommentQuestion.disableRemoteMethod('__get__accessTokens', false);
  CommentQuestion.disableRemoteMethod('__updateById__accessTokens', false);

};
