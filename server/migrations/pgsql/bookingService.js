module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('BookingService', function (err) {
      if (err) throw err;
      next();
    });
  },
  down: function (dataSource, next) {
    dataSource.models.BookingService.destroyAll({}, next);
  }
};