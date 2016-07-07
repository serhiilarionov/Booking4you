module.exports = {
  up: function(dataSource, next) {
    dataSource.autoupdate('City', function (err) {
      if (err) throw err;

      dataSource.models.City.create([
        {
          id: 1,
          name: 'Кривий Ріг',
          slug: 'kryvyi-rih',
          regionId: 3,
          active: true,
          point: '33.391783, 47.910483'
        }, {
          id: 2,
          name: 'Дніпропетровськ',
          slug: 'dnipropetrovsk',
          regionId: 3,
          active: true,
          point: '35.046183, 48.464717'
        }, {
          id: 3,
          name: 'Київ',
          slug: 'kyiv',
          regionId: 9,
          active: true,
          point: '30.5234, 50.4501'
        }
      ], next);
    });
  },
  down: function(dataSource, next) {
    dataSource.models.City.destroyAll([], next);
  }
};