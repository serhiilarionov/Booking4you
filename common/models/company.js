module.exports = function(Company) {

    Company.disableRemoteMethod('deleteById', true);

    Company.disableRemoteMethod('__create__details', false);
    Company.disableRemoteMethod('__deleteById__details', false);
    Company.disableRemoteMethod('__updateById__details', false);

};
