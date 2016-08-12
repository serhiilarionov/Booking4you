module.exports = function (Container) {
  var qt = require('quickthumb');
  var fs = require('fs');
  var fsp = require('fs-promise');
  var mkdirSync = require('../../server/helpers/mkdirSync');
  var Promise = require('bluebird');

  Container.afterRemote('upload', function (ctx, modelInstance, next) {
    var fields = ctx.result.result.fields;
    if (!fields['cityId'] || !fields['categoryId'] || !fields['companyId']) {
      throw new Error('You do not set enough parameters');
    }
    var files = ctx.result.result.files;
    var promises = [];

    Object.keys(files).forEach(function(key) {
      var containerPath = '../client/storage/' + files[key][0].container;
      var oldPath = './' + containerPath + '/' + files[key][0].name;
      var newPath = containerPath + '/' + fields['cityId'][0] + '/' +
        fields['categoryId'][0] + '/' + fields['companyId'][0];
      mkdirSync(newPath + '/thumb');
      var newThumbPath = newPath + '/thumb/' + files[key][0].name;
      newPath = './' + newPath + '/' + files[key][0].name;

      promises.push(
        fsp.readFile(oldPath)
          .then(function (data) {
            return fsp.writeFile(newPath, data);
          })
          .then(function () {
            return fsp.unlink(oldPath);
          })
          .then(function () {
            new Promise(function (resolve, reject) {
              qt.convert({
                src: newPath,
                dst: newThumbPath,
                width: 100
              }, function (err, path) {
                if(err) {
                  reject(err)
                }
                else {
                  resolve()
                }
              });
            })
          })
      );
    });
    
    Promise.all(promises)
      .then(function () {
        next();
      })
      .catch(next)
  });
};
