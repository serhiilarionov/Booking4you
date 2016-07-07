module.exports = {
  up: function (dataSource, next) {

    dataSource.autoupdate('AccessToken', next)
  },
  down: function (dataSource, next) {
    dataSource.models.User.destroyAll([], next);
  }
};