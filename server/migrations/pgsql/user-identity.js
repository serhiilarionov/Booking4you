module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('userIdentity', function (err) {
      if (err) throw err;
      next();
    });
  },
  down: function (dataSource, next) {
    dataSource.models.userIdentity.destroyAll({}, next);
  }
};