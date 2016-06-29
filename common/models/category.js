module.exports = function(MyModel) {
    MyModel.on('dataSourceAttached', function(obj){
        var find = MyModel.find;
        MyModel.find = function(filter, cb) {
            console.log(arguments);
            return find.apply(this, arguments);
        };
    });
};
