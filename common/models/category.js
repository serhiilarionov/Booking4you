module.exports = function (Category) {

  Category.disableRemoteMethod("create", false);
  Category.disableRemoteMethod("upsert", false);
  Category.disableRemoteMethod("updateAll", false);
  Category.disableRemoteMethod("updateAttributes", false);

  Category.disableRemoteMethod("find", false);
  Category.disableRemoteMethod("findById", false);
  Category.disableRemoteMethod("findOne", false);

  Category.disableRemoteMethod("deleteById", false);

  Category.disableRemoteMethod("confirm", true);
  Category.disableRemoteMethod("count", false);
  Category.disableRemoteMethod("exists", false);
  Category.disableRemoteMethod("resetPassword", true);

  Category.disableRemoteMethod("createChangeStream", true);

  Category.disableRemoteMethod('__count__accessTokens', false);
  Category.disableRemoteMethod('__create__accessTokens', false);
  Category.disableRemoteMethod('__delete__accessTokens', false);
  Category.disableRemoteMethod('__destroyById__accessTokens', false);
  Category.disableRemoteMethod('__findById__accessTokens', false);
  Category.disableRemoteMethod('__get__accessTokens', false);
  Category.disableRemoteMethod('__updateById__accessTokens', false);

  Category.on('dataSourceAttached', function (obj) {
    var find = Category.find;
    Category.find = function (filter, cb) {
      return find.apply(this, arguments);
    };
  });
  Category.findWithCompany = function (filter, cb) {
    filter || (filter = {});
    var dataSource = Category.dataSource;

    var sql = 'SELECT company.name AS companyName, ' +
      'company.title, ' +
      'company.desc, ' +
      'company.photo, ' +
      'company.active AS companyActive, ' +
      'company.point, ' +
      'company.buildingId, ' +
      'company.streetId, ' +
      'company.districtId, ' +
      'company.cityId, ' +
      'company.room, ' +
      'company.locationDetail, ' +
      'category.name AS categoryName, ' +
      'category.slug, ' +
      'category.parentId, ' +
      'category.icon, ' +
      'category.position, ' +
      'category.active AS categoryActive FROM category ' +
      'left join categoryCompany on category.id = categoryCompany.categoryId ' +
      'left join company on categoryCompany.categoryId = company.id ';
    
    if (filter.where) {
      sql += 'where ';

      for (var keys = Object.keys(filter.where), i = 0, end = keys.length; i < end; i++) {
        var key = keys[i], value = filter.where[key];
        sql += key + ' = \'' + value + '\'';
        if (i + 1 < end) {
          sql += ' and '
        }
      }
    }

    dataSource.connector.execute(sql, function (err, companies) {
      cb(err, companies);
    });
  };


  Category.remoteMethod(
    'findWithCompany',
    {
      http: {verb: 'get'},
      accepts: {arg: 'argument', type: 'object'},
      returns: {arg: 'data', type: ['Category'], root: true}
    }
  );
};
