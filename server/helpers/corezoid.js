'use strict';

var sha1 = require('sha1');
var Curl = require( 'node-libcurl' ).Curl;

var Corezoid = function (apiLogin, apiSecret) {

  if (!apiLogin) {
    throw new Error('login is empty');
  }
  if (!apiSecret) {
    throw new Error('secret is empty');
  }

  /**
   * host Corezoid
   */
  this.host = 'https://www.corezoid.com';
  /**
   * Version API
   */
  this.version = '1';
  /**
   * Format API
   */
  this.format = 'json';
  /**
   * User API
   */
  this.apiLogin = apiLogin;
  /**
   * API secret key
   */
  this.apiSecret = apiSecret;
  /**
   * Array tasks
   */
  this.tasks = [];
};

/**
 * Add new task
 *
 * @param ref
 * @param convId
 * @param data
 */
Corezoid.prototype.addTask = function (ref, convId, data) {
  var this_ = this;
  data = data || [];

  if (!ref) {
    throw new Error('ref is empty');
  }
  if (!convId) {
    throw new Error('convId is empty');
  }
  this_.tasks.push({
    'ref': ref,
    'type': 'create',
    'obj': 'task',
    'conv_id': convId,
    'data': data
  });
};

/**
 * Send tasks to Corezoid
 *
 */
Corezoid.prototype.sendTasks = function () {
  var this_ = this;

  return new Promise(function(resolve, reject) {
    var content = JSON.stringify({'ops': this_.tasks});
    var time = Date.now();
    var url = this_.makeUrl(time, content);

    var curl = new Curl();
    curl.setOpt('URL', url);
    curl.setOpt(Curl.option.SSL_VERIFYPEER, false);
    curl.setOpt(Curl.option.POST, 1);
    curl.setOpt(Curl.option.POSTFIELDS, content);

    curl.on('end', function(statusCode, body, headers) {
      var message = statusCode + ': ' + body;
      this.close();
      resolve(message);
    });
    curl.on('error', function(err, errCode) {
      this.close();
      reject(err);
    });
    curl.perform();
  });
};

/**
 * Create URL to Corezoid
 *
 * @param time
 * @param content
 * @returns {*}
 */
Corezoid.prototype.makeUrl = function (time, content) {
  var this_ = this;
  var sign = this_.makeSign(time, content);
  return this_.host + '/api/' +
    this_.version + '/' +
    this_.format + '/' +
    this_.apiLogin + '/' +
    time + '/' + sign;
};

/**
 * Create Signature
 *
 * @param time
 * @param content
 * @returns {*}
 */
Corezoid.prototype.makeSign = function (time, content) {
  var this_ = this;
  return sha1(time + this_.apiSecret + content + this_.apiSecret, 1);
};

module.exports = Corezoid;