module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('ACL', next)
  },
  down: function (dataSource, next) {
    dataSource.models.ACL.destroyAll([], next);
  }
};