module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('Logs', function (err) {
      if (err) throw err;
      next();
    });
  },
  down: function (dataSource, next) {
    dataSource.models.Logs.destroyAll({}, next);
  }
};