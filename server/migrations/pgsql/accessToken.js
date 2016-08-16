module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('AccessToken', next)
  },
  down: function (dataSource, next) {
    dataSource.models.AccessToken.destroyAll([], next);
  }
};