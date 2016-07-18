module.exports = {
  up: function (dataSource, next) {
    dataSource.autoupdate('User', function (err) {
      if (err) throw err;
      dataSource.autoupdate('AccessToken', function (err) {
        if (err) throw err;
        dataSource.autoupdate('ACL', function (err) {
          if (err) throw err;

          dataSource.models.User.create([
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
    dataSource.models.User.destroyAll([], next);
  }
};