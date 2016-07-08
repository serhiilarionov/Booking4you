module.exports = function(MyModel) {

    MyModel.disableRemoteMethod("create", false);
    MyModel.disableRemoteMethod("upsert", false);
    MyModel.disableRemoteMethod("updateAll", false);
    MyModel.disableRemoteMethod("updateAttributes", false);

    MyModel.disableRemoteMethod("find", false);
    MyModel.disableRemoteMethod("findById", false);
    MyModel.disableRemoteMethod("findOne", false);

    MyModel.disableRemoteMethod("deleteById", false);

    MyModel.disableRemoteMethod("confirm", true);
    MyModel.disableRemoteMethod("count", false);
    MyModel.disableRemoteMethod("exists", false);
    MyModel.disableRemoteMethod("resetPassword", true);

    MyModel.disableRemoteMethod("createChangeStream", true);

    MyModel.disableRemoteMethod('__count__accessTokens', false);
    MyModel.disableRemoteMethod('__create__accessTokens', false);
    MyModel.disableRemoteMethod('__delete__accessTokens', false);
    MyModel.disableRemoteMethod('__destroyById__accessTokens', false);
    MyModel.disableRemoteMethod('__findById__accessTokens', false);
    MyModel.disableRemoteMethod('__get__accessTokens', false);
    MyModel.disableRemoteMethod('__updateById__accessTokens', false);

    MyModel.on('dataSourceAttached', function(obj){
        var find = MyModel.find;
        MyModel.find = function(filter, cb) {
            return find.apply(this, arguments);
        };
    });
};
