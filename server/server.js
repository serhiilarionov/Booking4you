var loopback = require('loopback');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var crypto = require('crypto');
var boot = require('loopback-boot');
var path = require('path');

var app = module.exports = loopback();

// Passport configurators..
var loopbackPassport = require('loopback-component-passport');
var PassportConfigurator = loopbackPassport.PassportConfigurator;
var passportConfigurator = new PassportConfigurator(app);


/*
 * body-parser is a piece of express middleware that
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body`
 *
 */
var bodyParser = require('body-parser');

/**
 * Flash messages for passport
 *
 * Setting the failureFlash option to true instructs Passport to flash an
 * error message using the message given by the strategy's verify callback,
 * if any. This is often the best approach, because the verify callback
 * can make the most accurate determination of why authentication failed.
 */
var flash      = require('express-flash');

// attempt to build the providers/passport config
var config = {};
try {
  config = require('../providers.json');
} catch (err) {
  console.trace(err);
  process.exit(1); // fatal
}

app.set('view engine', 'ejs');
app.set('json spaces', 2);

app.set('views', path.resolve(__dirname, 'views'));

app.use(loopback.token());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  //require('./push-demo')(app);
  // start the server if `$ node server.js`
  if (require.main === module) {
    app.io = require('socket.io')(app.start());
    require('socketio-auth')(app.io, {
      authenticate: function (socket, value, callback) {

        var AccessToken = app.models.AccessToken;
        //get credentials sent by the client
        var token = AccessToken.find({
          where:{
            and: [{ userId: value.userId }, { id: value.id }]
          }
        }, function(err, tokenDetail){
          if (err) throw err;
          if(tokenDetail.length){
            callback(null, true);
          } else {
            callback(null, false);
          }
        }); //find function..
      } //authenticate function..
    });

    app.io.on('connection', function(socket){
      console.log('a user connected');
      socket.on('disconnect', function(){
        console.log('user disconnected');
      });
    });
  }
});

// to support JSON-encoded bodies
app.middleware('parse', bodyParser.json());
// to support URL-encoded bodies
app.middleware('parse', bodyParser.urlencoded({
  extended: true
}));

// The access token is only available after boot
app.middleware('auth', loopback.token({
  model: app.models.accessToken
}));

app.middleware('session:before', cookieParser(app.get('cookieSecret')));
app.middleware('session', session({
  secret: 'kitty',
  saveUninitialized: false,
  resave: false
}));
passportConfigurator.init();

// We need flash messages to see passport errors
app.use(flash());

passportConfigurator.setupModels({
  userModel: app.models.client,
  userIdentityModel: app.models.userIdentity,
  userCredentialModel: app.models.userCredential
});
for (var s in config) {
  var c = config[s];
  c.session = c.session !== false;

  c.profileToUser = function(provider, profile, options) {

    var email = profile.emails && profile.emails[0] && profile.emails[0].value;
    var username = provider + '.' + (profile.username || profile.id);

    var hmac = crypto.createHmac('sha1', 'password');
    var buf = crypto.randomBytes(32);
    hmac.update(buf);
    var password = hmac.digest('hex');
    
    var userObj = {
      username: username,
      password: password
    };
    if (email) {
      userObj.email = email;
    }
    return userObj;
  };

  passportConfigurator.configureProvider(s, c);
}