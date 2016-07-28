module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('Booking', function (err) {
      if (err) throw err;
      next();
    });
  },
  down: function (dataSource, next) {
    dataSource.models.Booking.destroyAll({}, next);
  }
};