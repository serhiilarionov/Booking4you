module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('CompanyLocation', function (err) {
      if (err) throw err;

      dataSource.models.CompanyLocation.create([
        {
          'companyId': 1,
          'point': "47.936635, 33.421607",
          'buildingId': 1,
          'streetId': 1,
          'districtId': 5,
          'cityId': 1,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 2,
          'point': "47.888798, 33.377237",
          'buildingId': 2,
          'streetId': 2,
          'districtId': 1,
          'cityId': 1,
          'room': '',
          'detail': 'район Песочной'
        },
        {
          'companyId': 3,
          'point': "47.995350, 33.437559",
          'buildingId': 3,
          'streetId': 3,
          'districtId': 3,
          'cityId': 1,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 4,
          'point': "47.885698, 33.286898",
          'buildingId': 4,
          'streetId': 4,
          'districtId': 7,
          'cityId': 1,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 5,
          'point': "47.907665, 33.321911",
          'buildingId': 5,
          'streetId': 5,
          'districtId': 7,
          'cityId': 1,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 6,
          'point': "47.907304, 33.312606",
          'buildingId': 6,
          'streetId': 5,
          'districtId': 7,
          'cityId': 1,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 7,
          'point': "47.970498, 33.426990",
          'buildingId': 7,
          'streetId': 6,
          'districtId': 5,
          'cityId': 1,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 8,
          'point': "48.432023, 35.046775",
          'buildingId': 8,
          'streetId': 7,
          'districtId': 10,
          'cityId': 2,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 9,
          'point': "48.430485, 34.805495",
          'buildingId': 9,
          'streetId': 8,
          'districtId': 12,
          'cityId': 2,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 10,
          'point': "48.494692, 35.122061",
          'buildingId': 10,
          'streetId': 9,
          'districtId': 15,
          'cityId': 2,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 11,
          'point': "48.459405, 35.016339",
          'buildingId': 11,
          'streetId': 10,
          'districtId': 12,
          'cityId': 2,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 12,
          'point': "48.450705, 35.074855",
          'buildingId': 12,
          'streetId': 11,
          'districtId': 10,
          'cityId': 2,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 13,
          'point': "48.478605, 35.027667",
          'buildingId': 13,
          'streetId': 12,
          'districtId': 12,
          'cityId': 2,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 14,
          'point': "50.344374, 30.548981",
          'buildingId': 14,
          'streetId': 13,
          'districtId': 16,
          'cityId': 3,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 15,
          'point': "50.49294, 30.336987",
          'buildingId': 15,
          'streetId': 14,
          'districtId': 23,
          'cityId': 3,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 16,
          'point': "50.476915, 30.49466",
          'buildingId': 16,
          'streetId': 15,
          'districtId': 22,
          'cityId': 3,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 17,
          'point': "50.528409, 30.508665",
          'buildingId': 17,
          'streetId': 16,
          'districtId': 20,
          'cityId': 3,
          'room': '',
          'detail': ''
        },
        {
          'companyId': 18,
          'point': "50.477161, 30.587725",
          'buildingId': 18,
          'streetId': 17,
          'districtId': 19,
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