var LoopBackContext = require('loopback-context');

module.exports = function (Core) {

  /**
   * Get token object
   * @returns {*}
   */
  function getToken() {
    var ctx = LoopBackContext.getCurrentContext();
    // Get the current access token
    return ctx && ctx.get('accessToken');
  }

  /**
   * Phone Verification
   * @param phone
   * @param cb
   */
  Core.phoneVerification = function (phone, cb) {

    var token = getToken();

    var body = {
      "phone": phone,
      "token": token.id,
      "userId": token.userId
    };

    var path = "public/156034/2f96f65910c5e3af4b0dda1dcfa4322068e17d0a";

    Core.run(path, body, function (err, result) {
      cb(null, result);
    });
  };

  Core.remoteMethod(
    'phoneVerification',
    {
      accepts: {arg: 'phone', type: 'string', required: true},
      returns: {arg: 'result', type: 'object'}
    }
  );

  /**
   * Phone verification confirm by entered code
   * @param code
   * @param smsId
   */
  Core.phoneVerificationConfirm = function (code, smsId, cb) {

    var body = {
      "task_id": smsId,
      "enteredCode": code
    };

    var path = "callback/57baf85b60e3273034202f40/2f96f65910c5e3af4b0dda1dcfa4322068e17d0a";

    Core.run(path, body, function (err, result) {
      cb(null, result);
    });
  };

  Core.remoteMethod(
    'phoneVerificationConfirm',
    {
      accepts: [
        {arg: 'code', type: 'string', required: true},
        {arg: 'smsId', type: 'string', required: true}
      ],
      returns: {arg: 'result', type: 'object'}
    }
  );

  /**
   * Sms Status from provider
   * @param id
   * @param phone
   * @param status
   * @param time
   * @param ts
   * @param err
   * @param cb
   */
  Core.smsStatus = function (id, phone, status, time, ts, err, cb) {

    var body = {
      "task_id": id,
      "phone": phone,
      "status": status
    };

    var path = "callback/57b97a54f6c3760bc3b516fc/25940f33b562bfd33db4db5af324ec74413b117f";

    Core.run(path, body, function (err, result) {
      cb(null, result);
    });

  };

  Core.remoteMethod(
    'smsStatus',
    {
      accepts: [
        {arg: 'id', type: 'string', required: true},
        {arg: 'phone', type: 'string', required: true},
        {arg: 'status', type: 'string', required: true},
        {arg: 'time', type: 'string'},
        {arg: 'ts', type: 'string'},
        {arg: 'err', type: 'string'}
      ],
      returns: {arg: 'result', type: 'object'}
    }
  );

  /**
   * Notify user
   * @param name
   * @param type
   * @param process
   * @param data
   * @param cb
   */
  Core.notify = function (name, type, process, data, cb) {
    var socket = Core.app.io;
    var Notify = Core.app.models.Notify;
    data = data || {};
    var token = getToken();
    var params = {
      "name": name,
      "type": type,
      "process": process,
      "data": data
    };
    socket.emit('/notify/' + token.userId, params);
    params.clientId = token.userId;
    Notify.create(params, cb(null, params));
  };

  Core.remoteMethod(
    'notify',
    {
      accepts: [
        {arg: 'name', type: 'string', required: true},
        {arg: 'type', type: 'string', required: true},
        {arg: 'process', type: 'string', required: true},
        {arg: 'data', type: 'object'}
      ],
      returns: {arg: 'params', type: 'object'}
    }
  );

  /**
   * Updating status of booking
   * @param taskId
   * @param status
   * @param cb
   */
  Core.bookingStatusUpdate = function (taskId, status, cb) {
    var body = {
      "taskId": taskId,
      "bookingStatus": status
    };

    var path = "callback/57d11e0160e3270a413d7f87/c5e1502ed01ebf183397013b9d7bb2b68e9c14b0";

    Core.run(path, body, function (err, result) {
      cb(null, result);
    });
  };

  Core.remoteMethod(
    'bookingStatusUpdate',
    {
      accepts: [
        {arg: 'taskId', type: 'string', required: true},
        {arg: 'status', type: 'string', required: true}
      ],
      returns: {arg: 'result', type: 'object'}
    }
  );

  /**
   * Create new booking
   * @param companyId
   * @param date
   * @param serviceList
   * @param cb
   */
  Core.createBooking = function (companyId, date, serviceList, cb) {
    var token = getToken();

    var body = {
      "companyId": companyId,
      "date": date,
      "serviceList": serviceList,
      "token": token.id,
      "userId": token.userId
    };

    var path = "public/157805/c5e1502ed01ebf183397013b9d7bb2b68e9c14b0";

    Core.run(path, body, function (err, result) {
      cb(null, result[0].ops.obj_id);
    });
  };

  Core.remoteMethod(
    'createBooking',
    {
      accepts: [
        {arg: 'companyId', type: 'number', required: true},
        {arg: 'date', type: 'string', required: true},
        {arg: 'serviceList', type: 'array', required: true}
      ],
      returns: {arg: 'result', type: 'object'}
    }
  )

};
