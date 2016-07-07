module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('Category', function (err) {
      if (err) throw err;

      dataSource.models.Category.create([
        {
          'id': 1,
          'name': 'car',
          'slug': 'car',
          'parentId': 0,
          'icon': 'local_shipping',
          'position': 0,
          'active': true
        },
        {
          'id': 2,
          'name': 'leisure',
          'slug': 'leisure',
          'parentId': 0,
          'icon': 'tag_faces',
          'position': 1,
          'active': true
        },
        {
          'id': 3,
          'name': 'beauty',
          'slug': 'beauty',
          'parentId': 0,
          'icon': 'palette',
          'position': 2,
          'active': true
        },
        {
          'id': 4,
          'name': 'health',
          'slug': 'health',
          'parentId': 0,
          'icon': 'healing',
          'position': 3,
          'active': true
        },
        {
          'id': 21,
          'name': 'car-wash',
          'slug': 'car-wash',
          'parentId': 1,
          'icon': 'local_car_wash',
          'position': 1,
          'active': true
        },
        {
          'id': 22,
          'name': 'billiards',
          'slug': 'billiards',
          'parentId': 2,
          'icon': 'hdr_weak',
          'position': 1,
          'active': true
        },
        {
          'id': 23,
          'name': 'bowling',
          'slug': 'bowling',
          'parentId': 2,
          'icon': 'lens',
          'position': 2,
          'active': true
        },
        {
          'id': 24,
          'name': 'service-stations',
          'slug': 'service-stations',
          'parentId': 1,
          'icon': 'gears',
          'position': 2,
          'active': true
        }
      ], next);
    });
  },
  down: function (dataSource, next) {
    dataSource.models.Category.destroyAll([], next);
  }
};