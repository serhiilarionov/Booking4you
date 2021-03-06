var logger = require('../../server/helpers/logger');
var Promise = require('bluebird');

module.exports = function (Company) {
  logger(Company);

  Company.disableRemoteMethod("create", false);
  Company.disableRemoteMethod("upsert", false);
  Company.disableRemoteMethod("updateAll", false);
  Company.disableRemoteMethod("updateAttributes", false);

  Company.disableRemoteMethod("find", false);
  Company.disableRemoteMethod("findById", false);
  Company.disableRemoteMethod("findOne", false);

  Company.disableRemoteMethod("deleteById", false);

  Company.disableRemoteMethod("confirm", true);
  Company.disableRemoteMethod("count", false);
  Company.disableRemoteMethod("exists", false);
  Company.disableRemoteMethod("resetPassword", true);

  Company.disableRemoteMethod("createChangeStream", true);

  Company.disableRemoteMethod('__count__accessTokens', false);
  Company.disableRemoteMethod('__create__accessTokens', false);
  Company.disableRemoteMethod('__delete__accessTokens', false);
  Company.disableRemoteMethod('__destroyById__accessTokens', false);
  Company.disableRemoteMethod('__findById__accessTokens', false);
  Company.disableRemoteMethod('__get__accessTokens', false);
  Company.disableRemoteMethod('__updateById__accessTokens', false);

  Company.disableRemoteMethod('__create__details', false);
  Company.disableRemoteMethod('__deleteById__details', false);
  Company.disableRemoteMethod('__updateById__details', false);


  Company.sift = function (msg, cb) {
    var app = Company.app;
    var CompanyLocation = app.models.CompanyLocation;

    CompanyLocation.find(msg)
      .then(function (locations) {
        var promises = [];
        locations.forEach(function (location) {
          promises.push(
            Company.findOne({
              where: {id: location.companyId},
              fields: {id: true, name: true, title: true, categoryId: true, desc: true, active: true}
            })
          )
        });
        Promise.all(promises).then(function (companies) {
          cb(null, companies);
        });
      })
      .catch(cb);
  };

  Company.remoteMethod(
    'sift',
    {
      accepts: {arg: 'argument', type: 'object', http: {source: 'body'}},
      returns: {arg: 'companies', type: 'object'}
    }
  );

  Company.findWithCategory = function (filter, cb) {
    filter || (filter = {});
    var dataSource = Company.dataSource;

    var sql = 'SELECT company.name AS "companyName", ' +
      'company.title, ' +
      'company.desc, ' +
      'company.photo, ' +
      'company.active AS "companyActive", ' +
      'company.point, ' +
      'company.buildingId AS "buildingId", ' +
      'company.streetId AS "streetId", ' +
      'company.districtId AS "districtId", ' +
      'company.cityId AS "cityId", ' +
      'company.room, ' +
      'company.locationDetail AS "locationDetail", ' +
      'category.name AS "categoryName", ' +
      'category.slug, ' +
      'category.parentId AS "parentId", ' +
      'category.icon, ' +
      'category.position, ' +
      'category.active AS "categoryActive" FROM company ' +
      'left join categoryCompany on company.id = categoryCompany.companyId ' +
      'left join category on categoryCompany.categoryId = category.id ';

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


  Company.remoteMethod(
    'findWithCategory',
    {
      http: {verb: 'get'},
      accepts: {arg: 'filter', type: 'object'},
      returns: {arg: 'data', type: ['Company'], root: true}
    }
  );

  /**
    * Function return companies by geolocation
    * @param bound
    * @param categoryId
    * @param limit
    * @param cb
   */
  Company.byGeo = function (bound, categoryId, limit, cb) {
    var ds = Company.dataSource;
    var sql = "SELECT id, name, title, photo, point, categoryid, cityid, createdat from company where " +
      "ST_GeomFromText('POINT' || " +
      "replace('' || company.point, ',', ' '), 4326) " +
      "&& ST_MakeEnvelope(" + bound + ")";
    if (categoryId) {
      sql += "and categoryId =" + categoryId;
    }
    if (limit) {
      sql += " LIMIT " + limit;
    }
    ds.connector.query(sql, [], function (err, companies) {
      if (err) console.error(err);
      companies.forEach(function (company) {
        company.point.lat = company.point.y;
        company.point.lng = company.point.x;
        company.categoryId = company.categoryid;
        company.createdAt = company.createdat;
        company.cityId = company.cityid;
        company.cityId = company.cityid;

        delete company.point.x;
        delete company.point.y;
        delete company.cityid;
        delete company.categoryid;
        delete company.createdat;
      });

      cb(err, companies);
    });
  };

  Company.remoteMethod('byGeo', {
    accepts: [
      {arg: 'bound', type: 'string', required: true},
      {arg: 'categoryId', type: 'number', required: false},
      {arg: 'limit', type: 'number', required: false}
    ],
    returns: [
      {arg: "data", type: "Company", root: true}
    ],
    http: {
      verb: 'get'
    }
  });
};
