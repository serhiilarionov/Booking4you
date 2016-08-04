module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('CategoryCompany', function (err) {
      if (err) throw err;
      dataSource.models.CategoryCompany.create([
        {
          categoryId: 1,
          companyId: 1
        }, {
          categoryId: 2,
          companyId: 2
        }, {
          companyId: 3,
          categoryId: 21
        }, {
          companyId: 4,
          categoryId: 21
        }, {
          companyId: 5,
          categoryId: 21
        }, {
          companyId: 6,
          categoryId: 21
        }, {
          companyId: 7,
          categoryId: 21
        }, {
          companyId: 8,
          categoryId: 21
        }, {
          companyId: 9,
          categoryId: 21
        }, {
          companyId: 10,
          categoryId: 21
        }, {
          companyId: 11,
          categoryId: 21
        }, {
          companyId: 12,
          categoryId: 21
        }, {
          companyId: 13,
          categoryId: 21
        }, {
          companyId: 14,
          categoryId: 21
        }, {
          companyId: 15,
          categoryId: 21
        }, {
          companyId: 16,
          categoryId: 21
        }, {
          companyId: 17,
          categoryId: 21
        }, {
          companyId: 18,
          categoryId: 21
        }
      ], next);
    });
  },
  down: function (dataSource, next) {
    dataSource.models.CategoryCompany.destroyAll({}, next);
  }
};