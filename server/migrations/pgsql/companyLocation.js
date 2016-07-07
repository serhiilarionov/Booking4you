module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('CompanyLocation', function (err) {
      if (err) throw err;

      dataSource.models.CompanyLocation.create([
        {
          'companyId': 1,
          'point': "33.421607, 47.936635",
          'buildingId': 1,
          'streetId': 1,
          'district_id': 5,
          'cityId': 1,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 2,
          'point': "33.377237, 47.888798",
          'buildingId': 2,
          'streetId': 2,
          'district_id': 1,
          'cityId': 1,
          'room': '',
          'detail': 'район Песочной'
        },
        {
          'companyId': 3,
          'point': "33.437559, 47.995350",
          'buildingId': 3,
          'streetId': 3,
          'district_id': 3,
          'cityId': 1,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 4,
          'point': "33.286898, 47.885698",
          'buildingId': 4,
          'streetId': 4,
          'district_id': 7,
          'cityId': 1,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 5,
          'point': "33.321911, 47.907665",
          'buildingId': 5,
          'streetId': 5,
          'district_id': 7,
          'cityId': 1,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 6,
          'point': "33.312606, 47.907304",
          'buildingId': 6,
          'streetId': 5,
          'district_id': 7,
          'cityId': 1,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 7,
          'point': "33.426990, 47.970498",
          'buildingId': 7,
          'streetId': 6,
          'district_id': 5,
          'cityId': 1,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 8,
          'point': "35.046775, 48.432023",
          'buildingId': 8,
          'streetId': 7,
          'district_id': 10,
          'cityId': 2,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 9,
          'point': "34.805495, 48.430485",
          'buildingId': 9,
          'streetId': 8,
          'district_id': 12,
          'cityId': 2,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 10,
          'point': "35.122061, 48.494692",
          'buildingId': 10,
          'streetId': 9,
          'district_id': 15,
          'cityId': 2,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 11,
          'point': "35.016339, 48.459405",
          'buildingId': 11,
          'streetId': 10,
          'district_id': 12,
          'cityId': 2,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 12,
          'point': "35.074855, 48.450705",
          'buildingId': 12,
          'streetId': 11,
          'district_id': 10,
          'cityId': 2,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 13,
          'point': "35.027667, 48.478605",
          'buildingId': 13,
          'streetId': 12,
          'district_id': 12,
          'cityId': 2,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 14,
          'point': "30.548981, 50.344374",
          'buildingId': 14,
          'streetId': 13,
          'district_id': 16,
          'cityId': 3,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 15,
          'point': "30.336987, 50.49294",
          'buildingId': 15,
          'streetId': 14,
          'district_id': 23,
          'cityId': 3,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 16,
          'point': "30.49466, 50.476915",
          'buildingId': 16,
          'streetId': 15,
          'district_id': 22,
          'cityId': 3,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 17,
          'point': "30.508665, 50.528409",
          'buildingId': 17,
          'streetId': 16,
          'district_id': 20,
          'cityId': 3,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 18,
          'point': "30.587725, 50.477161",
          'buildingId': 18,
          'streetId': 17,
          'district_id': 19,
          'cityId': 3,
          'room': '',
          'detail': ''
        }
      ], next);
    });
  },
  down: function (dataSource, next) {
    dataSource.models.CompanyLocation.destroyAll([], next);
  }
};