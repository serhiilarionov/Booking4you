module.exports = function (Container) {
  var qt = require('quickthumb');
  var fs = require('fs');
  var fsp = require('fs-promise');
  var mkdirSync = require('../../server/helpers/mkdirSync');

  Container.afterRemote('upload', function (ctx, modelInstance, next) {
    var fields = ctx.result.result.fields;
    if (!fields['cityId'] || !fields['categoryId'] || !fields['companyId']) {
      throw new Error('You do not set enough parameters');
    }
    var container = ctx.req.params.container;
    var files = ctx.result.result.files[container];

    for (var i = 0; i < files.length; i++) {
      var containerPath = 'storage/' + files[i].container;
      var oldPath = './' + containerPath + '/' + files[i].name;
      var newPath = containerPath + '/' + fields['cityId'][0] + '/' +
        fields['categoryId'][0] + '/' + fields['companyId'][0];
      mkdirSync(newPath + '/thumb');
      var newThumbPath = newPath + '/thumb/' + files[i].name;
      newPath = './' + newPath + '/' + files[i].name;

      fsp.readFile(oldPath)
        .then(function (data) {
          return fsp.writeFile(newPath, data);
        })
        .then(function () {
          return fsp.unlink(oldPath);
        })
        .then(function () {
          qt.convert({
            src: newPath,
            dst: newThumbPath,
            width: 100
          }, function (err, path) {
            next(err);
          });
        })
        .catch(next);
    }
  });
};
