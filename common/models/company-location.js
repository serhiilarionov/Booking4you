module.exports = function(CompanyLocation) {

  CompanyLocation.disableRemoteMethod("create", false);
  CompanyLocation.disableRemoteMethod("upsert", false);
  CompanyLocation.disableRemoteMethod("updateAll", false);
  CompanyLocation.disableRemoteMethod("updateAttributes", false);

  CompanyLocation.disableRemoteMethod("find", false);
  CompanyLocation.disableRemoteMethod("findById", false);
  CompanyLocation.disableRemoteMethod("findOne", false);

  CompanyLocation.disableRemoteMethod("deleteById", false);

  CompanyLocation.disableRemoteMethod("confirm", true);
  CompanyLocation.disableRemoteMethod("count", false);
  CompanyLocation.disableRemoteMethod("exists", false);
  CompanyLocation.disableRemoteMethod("resetPassword", true);

  CompanyLocation.disableRemoteMethod("createChangeStream", true);

  CompanyLocation.disableRemoteMethod('__count__accessTokens', false);
  CompanyLocation.disableRemoteMethod('__create__accessTokens', false);
  CompanyLocation.disableRemoteMethod('__delete__accessTokens', false);
  CompanyLocation.disableRemoteMethod('__destroyById__accessTokens', false);
  CompanyLocation.disableRemoteMethod('__findById__accessTokens', false);
  CompanyLocation.disableRemoteMethod('__get__accessTokens', false);
  CompanyLocation.disableRemoteMethod('__updateById__accessTokens', false);

};
