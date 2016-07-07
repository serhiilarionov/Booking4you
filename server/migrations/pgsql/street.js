module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('Street', function (err) {
      if (err) throw err;

      dataSource.models.Street.create([
        {'id': 1, 'name': 'корнійчука', 'cityId': 1, 'districtId': 5, 'streetTypeId': 1},
        {'id': 2, 'name': 'вокзальна', 'cityId': 1, 'districtId': 1, 'streetTypeId': 1},
        {'id': 3, 'name': 'іртишська', 'cityId': 1, 'districtId': 3, 'streetTypeId': 1},
        {'id': 4, 'name': 'миколаївське', 'cityId': 1, 'districtId': 7, 'streetTypeId': 6},
        {'id': 5, 'name': 'модрівська', 'cityId': 1, 'districtId': 7, 'streetTypeId': 1},
        {'id': 6, 'name': 'сагайдачного', 'cityId': 1, 'districtId': 5, 'streetTypeId': 1},
        {'id': 7, 'name': 'лазаряна', 'cityId': 2, 'districtId': 10, 'streetTypeId': 1},
        {'id': 8, 'name': 'академіка павлова', 'cityId': 2, 'districtId': 12, 'streetTypeId': 1},
        {'id': 9, 'name': 'курсантська', 'cityId': 2, 'districtId': 15, 'streetTypeId': 1},
        {'id': 10, 'name': 'шмідта', 'cityId': 2, 'districtId': 12, 'streetTypeId': 1},
        {'id': 11, 'name': 'перемоги', 'cityId': 2, 'districtId': 10, 'streetTypeId': 12},
        {'id': 12, 'name': 'горького', 'cityId': 2, 'districtId': 12, 'streetTypeId': 1},
        {'id': 13, 'name': 'столичне', 'cityId': 3, 'districtId': 16, 'streetTypeId': 6},
        {'id': 14, 'name': 'пономарьова', 'cityId': 3, 'districtId': 23, 'streetTypeId': 1},
        {'id': 15, 'name': 'новоконстантинівська', 'cityId': 3, 'districtId': 22, 'streetTypeId': 1},
        {'id': 16, 'name': 'північна', 'cityId': 3, 'districtId': 20, 'streetTypeId': 1},
        {'id': 17, 'name': 'марка черемшини', 'cityId': 3, 'districtId': 19, 'streetTypeId': 1}

      ], next);
    });
  },
  down: function (dataSource, next) {
    dataSource.models.Street.destroyAll({}, next);
  }
};