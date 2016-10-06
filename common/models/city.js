module.exports = function(City) {

  City.disableRemoteMethod("create", false);
  City.disableRemoteMethod("upsert", false);
  City.disableRemoteMethod("updateAll", false);
  City.disableRemoteMethod("updateAttributes", false);

  City.disableRemoteMethod("find", false);
  City.disableRemoteMethod("findById", false);
  City.disableRemoteMethod("findOne", false);

  City.disableRemoteMethod("deleteById", false);

  City.disableRemoteMethod("confirm", true);
  City.disableRemoteMethod("count", false);
  City.disableRemoteMethod("exists", false);
  City.disableRemoteMethod("resetPassword", true);

  City.disableRemoteMethod("createChangeStream", true);

  City.disableRemoteMethod('__count__accessTokens', false);
  City.disableRemoteMethod('__create__accessTokens', false);
  City.disableRemoteMethod('__delete__accessTokens', false);
  City.disableRemoteMethod('__destroyById__accessTokens', false);
  City.disableRemoteMethod('__findById__accessTokens', false);
  City.disableRemoteMethod('__get__accessTokens', false);
  City.disableRemoteMethod('__updateById__accessTokens', false);

  /**
   * Login with geolocation
   * @param coordinates
   * @param cb
   */
  City.geoCity = function (coordinates, cb) {

    var ds = City.dataSource;
    var sql = "SELECT city.id, city.nameru from city where " +
      "ST_GeomFromText('POINT(' || " +
      "replace('" + coordinates + "', ',', ' ') || ')', 4326) " +
      "&& ST_MakeEnvelope(cast(split_part(city.bound, ', ', 1) as FLOAT), cast(split_part(city.bound, ', ', 2) as FLOAT)," +
      " cast(split_part(city.bound, ', ', 3) as FLOAT), cast(split_part(city.bound, ', ', 4) as FLOAT));";

    ds.connector.query(sql, [], function (err, city) {
      if (err) console.error(err);
      cb(err, city);
    });
  };

  City.remoteMethod(
    'geoCity',
    {
      accepts: [
        {arg: 'coordinates', type: 'string', required: true}
      ],
      http: {path: '/geoCity', verb: 'get'},
      returns: {arg: 'result', type: 'object'}
    }
  )
};
