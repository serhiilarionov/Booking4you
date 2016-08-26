module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('SmsLogs', function (err) {
      if (err) throw err;
      next();
    });
  },
  down: function (dataSource, next) {
    dataSource.models.SmsLogs.destroyAll({}, next);
  }
};