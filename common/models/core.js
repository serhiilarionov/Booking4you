module.exports = function (Core) {

    /**
     * Phone Verification
     * @param phone
     * @param cb
     */
    Core.phoneVerification = function (phone, cb) {

        var body = {
            "phone": phone,
            "token": 'GFKdORdRE40L82ZLHBpEQBlAuZzFaYdhZ8pmthm75fCBMrpOj3qSzq4OyCJBHV3T',
            "userId": 2
        };

        var path = "public/156034/2f96f65910c5e3af4b0dda1dcfa4322068e17d0a";

        Core.run(path, body, function (err, result) {
            cb(null, result);
        });
    };

    Core.remoteMethod(
        'phoneVerification',
        {
            accepts: {arg: 'phone', type: 'string'},
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
    )

    /**
     * Notify user
     * @param name
     * @param type
     * @param process
     * @param data
     * @param cb
     */
    Core.notify = function (name, type, process, data, cb) {
        console.log(name);
        console.log(type);
        console.log(process);
        console.log(data);

        cb(null, data);
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
            returns: {arg: 'result', type: 'object'}
        }
    )


};
