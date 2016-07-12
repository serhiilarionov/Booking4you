module.exports = function(CompanyServices) {

  CompanyServices.disableRemoteMethod("create", false);
  CompanyServices.disableRemoteMethod("upsert", false);
  CompanyServices.disableRemoteMethod("updateAll", false);
  CompanyServices.disableRemoteMethod("updateAttributes", false);

  CompanyServices.disableRemoteMethod("find", false);
  CompanyServices.disableRemoteMethod("findById", false);
  CompanyServices.disableRemoteMethod("findOne", false);

  CompanyServices.disableRemoteMethod("deleteById", false);

  CompanyServices.disableRemoteMethod("confirm", true);
  CompanyServices.disableRemoteMethod("count", false);
  CompanyServices.disableRemoteMethod("exists", false);
  CompanyServices.disableRemoteMethod("resetPassword", true);

  CompanyServices.disableRemoteMethod("createChangeStream", true);

  CompanyServices.disableRemoteMethod('__count__accessTokens', false);
  CompanyServices.disableRemoteMethod('__create__accessTokens', false);
  CompanyServices.disableRemoteMethod('__delete__accessTokens', false);
  CompanyServices.disableRemoteMethod('__destroyById__accessTokens', false);
  CompanyServices.disableRemoteMethod('__findById__accessTokens', false);
  CompanyServices.disableRemoteMethod('__get__accessTokens', false);
  CompanyServices.disableRemoteMethod('__updateById__accessTokens', false);
};
