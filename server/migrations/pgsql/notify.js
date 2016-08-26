module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('Notify', function (err) {
      if (err) throw err;
      next();
    });
  },
  down: function (dataSource, next) {
    dataSource.models.Notify.destroyAll({}, next);
  }
};