module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('userCredential', function (err) {
      if (err) throw err;
      next();
    });
  },
  down: function (dataSource, next) {
    dataSource.models.userCredential.destroyAll({}, next);
  }
};