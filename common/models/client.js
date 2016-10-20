var config = require('../../server/config.json');

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

  //send password reset link when password reset requested
  Client.on('resetPasswordRequest', function(info) {
    var url = 'http://' + config.host + ':' + config.port + '/reset-password';
    var html = 'Click <a href="' + url + '?access_token=' +
      info.accessToken.id + '">here</a> to reset your password';
    //'here' in above html is linked to : 'http://<host:port>/reset-password?access_token=<short-lived/temporary access token>'
    Client.app.models.Email.send({
      to: info.email,
      from: info.email,
      subject: 'Password reset',
      html: html
    }, function(err) {
      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', info.email);
    });
  });
};

