module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('Comment', function (err) {
      if (err) throw err;
      next();
    });
  },
  down: function (dataSource, next) {
    dataSource.models.Comment.destroyAll({}, next);
  }
};