module.exports = function(Client) {

  Client.disableRemoteMethod("create", false);
  Client.disableRemoteMethod("upsert", false);
  Client.disableRemoteMethod("updateAll", false);
  Client.disableRemoteMethod("updateAttributes", false);

  Client.disableRemoteMethod("find", false);
  Client.disableRemoteMethod("findById", false);
  Client.disableRemoteMethod("findOne", false);

  Client.disableRemoteMethod("deleteById", false);

  Client.disableRemoteMethod("confirm", true);
  Client.disableRemoteMethod("count", false);
  Client.disableRemoteMethod("exists", false);
  Client.disableRemoteMethod("resetPassword", true);

  Client.disableRemoteMethod("createChangeStream", true);

  Client.disableRemoteMethod('__count__accessTokens', false);
  Client.disableRemoteMethod('__create__accessTokens', false);
  Client.disableRemoteMethod('__delete__accessTokens', false);
  Client.disableRemoteMethod('__destroyById__accessTokens', false);
  Client.disableRemoteMethod('__findById__accessTokens', false);
  Client.disableRemoteMethod('__get__accessTokens', false);
  Client.disableRemoteMethod('__updateById__accessTokens', false);

  /**
   * Login with geolocation
   * @param credentials
   * @param cb
   */
  Client.geoLogin = function (credentials, cb) {
    var result = {};
    Client.login({email: credentials.email, password: credentials.password}, function (err, token) {
      result = token;

      var ds = Client.dataSource;
      var sql = "SELECT city.id, city.nameru from city where " +
        "ST_GeomFromText('POINT(' || " +
        "replace('" + credentials.latlng + "', ',', ' ') || ')', 4326) " +
        "&& ST_MakeEnvelope(cast(split_part(city.bound, ', ', 1) as FLOAT), cast(split_part(city.bound, ', ', 2) as FLOAT)," +
        " cast(split_part(city.bound, ', ', 3) as FLOAT), cast(split_part(city.bound, ', ', 4) as FLOAT));";

      ds.connector.query(sql, [], function (err, city) {
        if (err) console.error(err);
        if(city.length) {
          result.cityName = city[0].nameru;
          result.cityId = city[0].id;
        }
        cb(err, result);
      });
    });

  };

  Client.remoteMethod(
    'geoLogin',
    {
      accepts: [
        {arg: 'credentials', type: 'object', required: true}
      ],
      returns: {arg: 'result', type: 'object'}
    }
  )

};

