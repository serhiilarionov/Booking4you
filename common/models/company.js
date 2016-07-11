module.exports = function(Company) {
    
    Company.disableRemoteMethod("create", false);
    Company.disableRemoteMethod("upsert", false);
    Company.disableRemoteMethod("updateAll", false);
    Company.disableRemoteMethod("updateAttributes", false);

    Company.disableRemoteMethod("find", false);
    Company.disableRemoteMethod("findById", false);
    Company.disableRemoteMethod("findOne", false);

    Company.disableRemoteMethod("deleteById", false);

    Company.disableRemoteMethod("confirm", true);
    Company.disableRemoteMethod("count", false);
    Company.disableRemoteMethod("exists", false);
    Company.disableRemoteMethod("resetPassword", true);

    Company.disableRemoteMethod("createChangeStream", true);

    Company.disableRemoteMethod('__count__accessTokens', false);
    Company.disableRemoteMethod('__create__accessTokens', false);
    Company.disableRemoteMethod('__delete__accessTokens', false);
    Company.disableRemoteMethod('__destroyById__accessTokens', false);
    Company.disableRemoteMethod('__findById__accessTokens', false);
    Company.disableRemoteMethod('__get__accessTokens', false);
    Company.disableRemoteMethod('__updateById__accessTokens', false);

    Company.disableRemoteMethod('__create__details', false);
    Company.disableRemoteMethod('__deleteById__details', false);
    Company.disableRemoteMethod('__updateById__details', false);
};
