module.exports = function(Model) {

  Model.beforeRemote('**', function (ctx, obj, next) {
    var app = Model.app;
    var Logs = app.models.Logs;
    var log = {
      "userId": ctx.req.accessToken.userId,
      "loggableType": Model.modelName,
      "method": ctx.method.name
    };
    if (ctx.method.name == "create") {
      log.before = {};
      log.after = ctx.args.data;
      log.loggableId = ctx.args.data.id;
      Logs.create(log);
      next();
    }
    else if (ctx.method.name == "upsert") {
      Model.findById(ctx.args.data.id)
        .then(function (model) {
          log.before = model.__data;
          log.after = ctx.args.data;
          log.loggableId = ctx.args.data.id;

          Logs.create(log);
          next();
        })
        .catch(next);
    }
    else if (ctx.method.name == "deleteById") {
      Model.findById(ctx.args.id)
        .then(function (model) {
          log.before = model.__data;
          log.after = {};
          log.loggableId = ctx.args.id;

          Logs.create(log);
          next();
        })
        .catch(next);
    }
  });
};