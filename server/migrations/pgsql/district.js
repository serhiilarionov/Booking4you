module.exports = {
  up: function(dataSource, next) {
    dataSource.autoupdate('District', function (err) {
      if (err) throw err;

      
      dataSource.models.District.create([
        {
          'id': 1,
          'name': 'Дзержинський район',
          'cityId': 1,
          'point': '33.3895755, 47.8807098'
        },
        {
          'id': 2,
          'name': 'Довгинцівський район',
          'cityId': 1,
          'point': '33.4511855, 47.9271524'
        },
        {
          'id': 3,
          'name': 'Жовтневий район',
          'cityId': 1,
          'point': '33.4856998, 47.9825604'
        },
        {
          'id': 4,
          'name': 'Інгулецький район',
          'cityId': 1,
          'point': '33.2, 47.6958'
        },
        {
          'id': 5,
          'name': 'Саксаганський район',
          'cityId': 1,
          'point': '33.408679, 47.946668'
        },
        {
          'id': 6,
          'name': 'Тернівський район',
          'cityId': 1,
          'point': '33.5276837, 48.1025172'
        },
        {
          'id': 7,
          'name': 'Центрально-Міський район',
          'cityId': 1,
          'point': '33.3351734, 47.898529'
        },
        {
          'id': 8,
          'name': 'Амур-Нижньодніпровський район',
          'cityId': 2,
          'point': '34.9746164, 48.51473'
        },
        {
          'id': 9,
          'name': 'Бабушкінський район',
          'cityId': 2,
          'point': '35.0138, 48.4063'
        },
        {
          'id': 10,
          'name': 'Жовтневий район',
          'cityId': 2,
          'point': '35.06857, 48.4365564'
        },
        {
          'id': 11,
          'name': 'Індустріальний район',
          'cityId': 2,
          'point': '35.0603618, 48.5247577'
        },
        {
          'id': 12,
          'name': 'Кіровський район',
          'cityId': 2,
          'point': '35.0338718, 48.4770705'
        },
        {
          'id': 13,
          'name': 'Красногвардійський район',
          'cityId': 2,
          'point': '34.9707821, 48.4251154'
        },
        {
          'id': 14,
          'name': 'Ленінський район',
          'cityId': 2,
          'point': '34.9071122, 48.4812793'
        },
        {
          'id': 15,
          'name': 'Самарський район',
          'cityId': 2,
          'point': '35.126832, 48.4560436'
        },
        {
          'id': 16,
          'name': 'Голосіївський район',
          'cityId': 3,
          'point': '30.515278, 50.402778'
        },
        {
          'id': 17,
          'name': 'Дарницький район',
          'cityId': 3,
          'point': '30.676667, 50.406111'
        },
        {
          'id': 18,
          'name': 'Деснянський район',
          'cityId': 3,
          'point': '30.704167, 50.53'
        },
        {
          'id': 19,
          'name': 'Дніпровський район',
          'cityId': 3,
          'point': '30.601521, 50.4535873'
        },
        {
          'id': 20,
          'name': 'Оболонський район',
          'cityId': 3,
          'point': '30.4372576, 50.5467298'
        },
        {
          'id': 21,
          'name': 'Печерський район',
          'cityId': 3,
          'point': '30.549444, 50.420556'
        },
        {
          'id': 22,
          'name': 'Подільський район',
          'cityId': 3,
          'point': '30.4428556, 50.4938086'
        },
        {
          'id': 23,
          'name': 'Святошинський район',
          'cityId': 3,
          'point': '30.345138, 50.464301'
        },
        {
          'id': 24,
          'name': 'Солом`янський район',
          'cityId': 3,
          'point': '30.4529175, 50.4282552'
        },
        {
          'id': 25,
          'name': 'Шевченківський район',
          'cityId': 3,
          'point': '30.4664647, 50.4642048'
        }
      ], next);
    });
  },
  down: function(dataSource, next) {
    dataSource.models.District.destroyAll({}, next);
  }
};