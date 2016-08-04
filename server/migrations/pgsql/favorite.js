module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('Favorite', function (err) {
      if (err) throw err;
      next();
    });
  },
  down: function (dataSource, next) {
    dataSource.models.Favorite.destroyAll({}, next);
  }
};