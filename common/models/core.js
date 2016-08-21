module.exports = function(Core) {

    Core.phoneVerification = function(phone, cb) {

        var body = {
            "phone": phone,
            "token": 'GFKdORdRE40L82ZLHBpEQBlAuZzFaYdhZ8pmthm75fCBMrpOj3qSzq4OyCJBHV3T',
            "userId": 2
        };

        var path = "2f96f65910c5e3af4b0dda1dcfa4322068e17d0a";

        Core.run(path, body, function(err, result) {
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
};
