module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('CommentQuestion', function (err) {
      if (err) throw err;
      next();
    });
  },
  down: function (dataSource, next) {
    dataSource.models.CommentQuestion.destroyAll({}, next);
  }
};