module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('Client', function (err) {
      if (err) throw err;
      dataSource.autoupdate('AccessToken', function (err) {
        if (err) throw err;
        dataSource.autoupdate('ACL', function (err) {
          if (err) throw err;

          dataSource.models.Client.create([
            {
              "email": "user@user.user",
              "password": "user"
            },
            {
              "email": "admin@admin.com",
              "password": "admin"
            }
          ], next);
        })
      });
    })
  },
  down: function (dataSource, next) {
    dataSource.models.Client.destroyAll([], next);
  }
};