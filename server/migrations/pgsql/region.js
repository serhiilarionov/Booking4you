module.exports = {
  up: function(dataSource, next) {
    dataSource.autoupdate('Region', function (err) {
      if (err) throw err;

      
      dataSource.models.Region.create([
        {
          'id': 1,
          'slug': 'vinnytsia_reg',
          'name': 'Вінницька область',
          'countryId': 1,
          'point': '49.233083, 28.468217',
          'active': true
        },
        {
          'id': 2,
          'slug': 'volyn_reg',
          'name': 'Волинська область',
          'countryId': 1,
          'point': '25.325383, 50.747233',
          'active': true
        },
        {
          'id': 3,
          'slug': 'dnipropetrovsk_reg',
          'name': 'Дніпропетровська область',
          'countryId': 1,
          'point': '35.046183, 48.464717',
          'active': true
        },
        {
          'id': 4,
          'slug': 'donetsk_reg',
          'name': 'Донецька область',
          'countryId': 1,
          'point': '37.80285, 48.015883',
          'active': true
        },
        {
          'id': 5,
          'slug': 'zhytomyr_reg',
          'name': 'Житомирська область',
          'countryId': 1,
          'point': '28.658667, 50.25465',
          'active': true
        },
        {
          'id': 6,
          'slug': 'transcarpathian_reg',
          'name': 'Закарпатська область',
          'countryId': 1,
          'point': '22.287883, 48.6208',
          'active': true
        },
        {
          'id': 7,
          'slug': 'zaporizhia_reg',
          'name': 'Запорізька область',
          'countryId': 1,
          'point': '35.139567, 47.8388',
          'active': true
        },
        {
          'id': 8,
          'slug': 'ivano-Frankivsk_reg',
          'name': 'Івано-Франківська область',
          'countryId': 1,
          'point': '24.711117, 48.922633',
          'active': true
        },
        {
          'id': 9,
          'slug': 'kiev_reg',
          'name': 'Київська область',
          'countryId': 1,
          'point': '30.7667133, 50.0529506',
          'active': true
        },
        {
          'id': 10,
          'slug': 'kirovogradska_reg',
          'name': 'Кіровоградська область',
          'countryId': 1,
          'point': '32.262317, 48.507933',
          'active': true
        },
        {
          'id': 11,
          'slug': 'crimea_reg',
          'name': 'Автономна республіка Крим',
          'countryId': 1,
          'point': '34.102417, 44.952117',
          'active': true
        },
        {
          'id': 12,
          'slug': 'luhansk_reg',
          'name': 'Луганська область',
          'countryId': 1,
          'point': '39.307815, 48.574041',
          'active': true
        },
        {
          'id': 13,
          'slug': 'lviv_reg',
          'name': 'Львівська область',
          'countryId': 1,
          'point': '24.029717, 49.839683',
          'active': true
        },
        {
          'id': 14,
          'slug': 'mykolaiv_reg',
          'name': 'Миколаївська область',
          'countryId': 1,
          'point': '31.994583, 46.975033',
          'active': true
        },
        {
          'id': 15,
          'slug': 'odessa_reg',
          'name': 'Одеська область',
          'countryId': 1,
          'point': '30.7326, 46.484583',
          'active': true
        },
        {
          'id': 16,
          'slug': 'poltava_reg',
          'name': 'Полтавська область',
          'countryId': 1,
          'point': '34.551417, 49.588267',
          'active': true
        },
        {
          'id': 17,
          'slug': 'rivne_reg',
          'name': 'Рівенська область',
          'countryId': 1,
          'point': '26.251617, 50.6199',
          'active': true
        },
        {
          'id': 18,
          'slug': 'sumy_reg',
          'name': 'Сумська область',
          'countryId': 1,
          'point': '34.7981, 50.9077',
          'active': true
        },
        {
          'id': 19,
          'slug': 'ternopil_reg',
          'name': 'Тернопільська область',
          'countryId': 1,
          'point': '25.594767, 49.553517',
          'active': true
        },
        {
          'id': 20,
          'slug': 'kharkiv_reg',
          'name': 'Харківська область',
          'countryId': 1,
          'point': '36.230383, 49.9935',
          'active': true
        },
        {
          'id': 21,
          'slug': 'kherson_reg',
          'name': 'Херсонська область',
          'countryId': 1,
          'point': '32.616867, 46.635417',
          'active': true
        },
        {
          'id': 22,
          'slug': 'khmelnytsky_reg',
          'name': 'Хмельницька область',
          'countryId': 1,
          'point': '26.987133, 49.422983',
          'active': true
        },
        {
          'id': 23,
          'slug': 'cherkasy_reg',
          'name': 'Черкаська область',
          'countryId': 1,
          'point': '32.059767, 49.444433',
          'active': true
        },
        {
          'id': 24,
          'slug': 'chernihiv_reg',
          'name': 'Чернігівська область',
          'countryId': 1,
          'point': '31.28935, 51.4982',
          'active': true
        },
        {
          'id': 25,
          'slug': 'chernivtsi_reg',
          'name': 'Чернівецька область',
          'countryId': 1,
          'point': '25.935217, 48.291683',
          'active': true
        }
      ], next);
    });
  },
  down: function(dataSource, next) {
    dataSource.models.Region.destroyAll({}, next);
  }
};