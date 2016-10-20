'use strict';

var Corezoid = require('../helpers/corezoid');

module.exports = function (server) {
  var Client = server.models.Client;
  var router = server.loopback.Router();

  router.post('/corezoid', function (req, res) {
    var apiLogin = '80107';
    var apiSecret = '0aZb4ru9EAoFFtIENKoiNzLfnjXgKt3BZjaFjClVnRLu115iob';
    var corezoid = new Corezoid(apiLogin, apiSecret);

    // Add new task
    var ref = Date.now() + '_' + Math.random();
    var task = {
      "key": "test_wG0njLrY7yS5XiVmu3a7sAxY6",
      "recipients": "+380983631729",
      "text": "hello from NodeJS",
      "access_token": req.query.access_token
    };
    // ID process
    var processId = 155308;

    corezoid.addTask(ref, processId, task);

    // Send all tasks to Corezoid.com
    corezoid.sendTasks()
      .then(function (response) {
        res.send(response);
      })
      .catch(function (err) {
        res.send(err);
      });
  });

  router.post('/test', function(req, res, next) {
    var apiLogin = '80009';
    var apiSecret = '5VW7v2D0jKAyj7qJmPSINJD6KtG4mU1hZqzJMevGIrddjnyIAz';
    var corezoid = new Corezoid(apiLogin, apiSecret);

    // Add new task
    var ref = Date.now() + '_' + Math.random();
    var task = {
      "token": req.query.access_token,
      "uri": "bookings",
      "filter": {}
    };
    // ID process
    var processId = 155737;

    corezoid.addTask(ref, processId, task);

    // Send all tasks to Corezoid.com
    corezoid.sendTasks()
      .then(function (response) {
        res.send(response);
      })
      .catch(function (err) {
        res.send(err);
      });
  });

  //send an email with instructions to reset an existing user's password
  router.post('/request-password-reset', function(req, res, next) {
    Client.resetPassword({
      email: req.body.email
    }, function(err) {
      if (err) return res.status(401).send(err);
      res.render('response', {
        title: 'Password reset requested',
        content: 'Check your email for further instructions',
        redirectTo: '/',
        redirectToLinkText: 'Log in'
      });
    });
  });

  //show password reset form
  router.get('/reset-password', function(req, res, next) {
    if (!req.accessToken) return res.sendStatus(401);
    res.render('password-reset', {
      accessToken: req.accessToken.id
    });
  });

  //reset the user's pasword
  router.post('/reset-password', function(req, res, next) {
    if (!req.accessToken) return res.sendStatus(401);

    //verify passwords match
    if (!req.body.password ||
      !req.body.confirmation ||
      req.body.password !== req.body.confirmation) {
      return res.sendStatus(400, new Error('Passwords do not match'));
    }

    Client.findById(req.accessToken.userId, function(err, client) {
      if (err) return res.sendStatus(404);
      client.updateAttribute('password', req.body.password, function(err, client) {
        if (err) return res.sendStatus(404);
        res.redirect("/app/");
      });
    });
  });

  server.use(router);
};