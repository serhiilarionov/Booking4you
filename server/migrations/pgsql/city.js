module.exports = {
  up: function(dataSource, next) {
    dataSource.autoupdate('City', function (err) {
      if (err) throw err;

      dataSource.models.City.create([
        {
          id: 1,
          name: 'Кривий Ріг',
          nameRu: 'Кривой Рог',
          slug: 'kryvyi rih',
          regionId: 3,
          active: true,
          point: '33.391783, 47.910483',
          bound: '33.134698, 47.637942, 33.598335, 48.176781'
        }, {
          id: 2,
          name: 'Дніпропетровськ',
          nameRu: 'Днепропетровск',          
          slug: 'dnipropetrovsk',
          regionId: 3,
          active: true,
          point: '35.046183, 48.464717',
          bound: '34.757975, 48.355729, 35.242738, 48.568868'
        }, {
          id: 3,
          name: 'Київ',
          nameRu: 'Киев',
          slug: 'kyiv',
          regionId: 9,
          active: true,
          point: '30.5234, 50.4501',
          bound: '30.2394401, 50.213273, 30.82594, 50.5907981'
        }
      ], next);
    });
  },
  down: function(dataSource, next) {
    dataSource.models.City.destroyAll([], next);
  }
};