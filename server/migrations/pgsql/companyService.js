module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('CompanyService', function (err) {
      if (err) throw err;

      dataSource.models.CompanyService.create([
        {
          'id': 1,
          'companyId': 1,
          'categoryId': 21,
          'name': 'EXPRESS мойка',
          'desc': '10 мин. Каждая 10 мойка БЕСПЛАТНО',
          'price': '30.00',
          'salePrice': '25.00',
          'currency': 'uah',
          'position': 1,
          'active': 1
        },
        {
          'id': 2,
          'companyId': 1,
          'categoryId': 21,
          'name': 'Мойка кузова (бесконтактная)',
          'desc': '',
          'price': '50.00',
          'salePrice': '40.00',
          'currency': 'uah',
          'position': 2,
          'active': 1
        },
        {
          'id': 3,
          'companyId': 1,
          'categoryId': 21,
          'name': 'Мойка кузова (контактная)',
          'desc': '',
          'price': '50.00',
          'salePrice': null,
          'currency': 'uah',
          'position': 3,
          'active': 1
        },
        {
          'id': 4,
          'companyId': 1,
          'categoryId': 21,
          'name': 'Уборка салона',
          'desc': 'Уборка салона пылесосом влажная уборка',
          'price': '30.00',
          'salePrice': null,
          'currency': 'uah',
          'position': 4,
          'active': 1
        },
        {
          'id': 5,
          'companyId': 1,
          'categoryId': 21,
          'name': 'Уборка багажника',
          'desc': 'пылесос',
          'price': '15.00',
          'salePrice': null,
          'currency': 'uah',
          'position': 4,
          'active': 1
        },
        {
          'id': 21,
          'companyId': 2,
          'categoryId': 21,
          'name': 'Мойка кузова',
          'desc': 'Мойка пеной антисоль жидкий холодный воск',
          'price': '70.00',
          'salePrice': '60.00',
          'currency': 'uah',
          'position': 1,
          'active': 1
        },
        {
          'id': 22,
          'companyId': 2,
          'categoryId': 21,
          'name': 'Экспресс мойка',
          'desc': 'сбивка грязи водой с кузова авто с автохимией, без сушки кузова',
          'price': '50.00',
          'salePrice': null,
          'currency': 'uah',
          'position': 2,
          'active': 1
        },
        {
          'id': 23,
          'companyId': 2,
          'categoryId': 21,
          'name': 'Комплексная мойка',
          'desc': '',
          'price': '150.00',
          'salePrice': null,
          'currency': 'uah',
          'position': 2,
          'active': 1
        },
        {
          'id': 24,
          'companyId': 2,
          'categoryId': 24,
          'name': 'Ремонт двигателя',
          'desc': '',
          'price': null,
          'salePrice': null,
          'currency': 'uah',
          'position': 1,
          'active': 1
        },
        {
          'id': 25,
          'companyId': 2,
          'categoryId': 24,
          'name': 'Ремонт КПП',
          'desc': '',
          'price': null,
          'salePrice': null,
          'currency': 'uah',
          'position': 2,
          'active': 1
        },
        {
          'id': 26,
          'companyId': 2,
          'categoryId': 24,
          'name': 'Диагностика двигателя',
          'desc': '',
          'price': null,
          'salePrice': null,
          'currency': 'uah',
          'position': 3,
          'active': 1
        }
      ], next);
    });
  },
  down: function (dataSource, next) {
    dataSource.models.CompanyService.destroyAll([], next);
  }
};