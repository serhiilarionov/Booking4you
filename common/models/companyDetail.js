module.exports = function(CompanyDetail) {

  CompanyDetail.disableRemoteMethod("create", false);
  CompanyDetail.disableRemoteMethod("upsert", false);
  CompanyDetail.disableRemoteMethod("updateAll", false);
  CompanyDetail.disableRemoteMethod("updateAttributes", false);

  CompanyDetail.disableRemoteMethod("find", false);
  CompanyDetail.disableRemoteMethod("findById", false);
  CompanyDetail.disableRemoteMethod("findOne", false);

  CompanyDetail.disableRemoteMethod("deleteById", false);

  CompanyDetail.disableRemoteMethod("confirm", true);
  CompanyDetail.disableRemoteMethod("count", false);
  CompanyDetail.disableRemoteMethod("exists", false);
  CompanyDetail.disableRemoteMethod("resetPassword", true);

  CompanyDetail.disableRemoteMethod("createChangeStream", true);

  CompanyDetail.disableRemoteMethod('__count__accessTokens', false);
  CompanyDetail.disableRemoteMethod('__create__accessTokens', false);
  CompanyDetail.disableRemoteMethod('__delete__accessTokens', false);
  CompanyDetail.disableRemoteMethod('__destroyById__accessTokens', false);
  CompanyDetail.disableRemoteMethod('__findById__accessTokens', false);
  CompanyDetail.disableRemoteMethod('__get__accessTokens', false);
  CompanyDetail.disableRemoteMethod('__updateById__accessTokens', false);
};
