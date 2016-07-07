module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('StreetType', function (err) {
      if (err) throw err;

      dataSource.models.StreetType.create([
        {'id': 1, 'name': 'улица'},
        {'id': 2, 'name': 'площадь'},
        {'id': 3, 'name': 'проспект'},
        {'id': 4, 'name': 'переулок'},
        {'id': 5, 'name': 'бульвар'},
        {'id': 6, 'name': 'шоссе'},
        {'id': 7, 'name': 'дорога'},
        {'id': 8, 'name': 'проезд'},
        {'id': 9, 'name': 'тупик'},
        {'id': 10, 'name': 'балка'},
        {'id': 11, 'name': 'спуск'},
        {'id': 12, 'name': 'набережная'},
        {'id': 13, 'name': 'станция'},
        {'id': 14, 'name': 'жилой массив'}
      ], next);
    });
  },
  down: function (dataSource, next) {
    dataSource.models.StreetType.destroyAll({}, next);
  }
};