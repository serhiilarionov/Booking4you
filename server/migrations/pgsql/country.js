module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('Country', function (err) {
      if (err) throw err;

      dataSource.models.Country.create([
        {
          'id': 1,
          'name': 'Україна',
          'code': 'ua',
          'active': true
        }
      ], next);
    });
  },
  down: function (dataSource, next) {
    dataSource.models.Country.destroyAll([], next);
  }
};