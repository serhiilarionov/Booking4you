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
              "phone": "+380(67)111-11-11",
              "phoneVerified": "2016-05-21 11:21:12",
              "email": "user@user.user",
              "password": "user",
              "status": "active"
            },
            {
              "phone": "+380(67)000-00-00",
              "phoneVerified": "2016-05-20 15:25:33",
              "email": "admin@admin.com",
              "password": "admin",
              "status": "active"
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