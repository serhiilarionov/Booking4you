module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('Category', function (err) {
      if (err) throw err;

      dataSource.models.Category.create([
        {
          'id': 1,
          'name': 'Автомобиль',
          'slug': 'car',
          'parentId': 0,
          'icon': 'local_shipping',
          'position': 0,
          'active': true
        },
        {
          'id': 2,
          'name': 'Досуг',
          'slug': 'leisure',
          'parentId': 0,
          'icon': 'tag_faces',
          'position': 1,
          'active': true
        },
        {
          'id': 3,
          'name': 'Красота',
          'slug': 'beauty',
          'parentId': 0,
          'icon': 'palette',
          'position': 2,
          'active': true
        },
        {
          'id': 4,
          'name': 'Здоровье',
          'slug': 'health',
          'parentId': 0,
          'icon': 'healing',
          'position': 3,
          'active': true
        },
        {
          'id': 21,
          'name': 'Автомойка',
          'slug': 'car-wash',
          'parentId': 1,
          'icon': 'local_car_wash',
          'position': 1,
          'active': true
        },
        {
          'id': 22,
          'name': 'Бильярд',
          'slug': 'billiards',
          'parentId': 2,
          'icon': 'hdr_weak',
          'position': 1,
          'active': true
        },
        {
          'id': 23,
          'name': 'Боулинг',
          'slug': 'bowling',
          'parentId': 2,
          'icon': 'lens',
          'position': 2,
          'active': true
        },
        {
          'id': 24,
          'name': 'Сервис-станции',
          'slug': 'service-stations',
          'parentId': 1,
          'icon': 'gears',
          'position': 2,
          'active': true
        }
      ], function() {

        var sql = "select setval('category_id_seq', (select max(id) + 1 from category));";
        var params = [];
        dataSource.connector.execute(sql, params, next);

      });
    });
  },
  down: function (dataSource, next) {
    dataSource.models.Category.destroyAll([], next);
  }
};