"use strict";
/* tslint:disable */
var StorageDriver = (function () {
    function StorageDriver() {
    }
    StorageDriver.set = function (key, value) {
        localStorage.setItem(key, value);
    };
    StorageDriver.get = function (key) {
        return localStorage.getItem(key);
    };
    StorageDriver.remove = function (key) {
        localStorage.removeItem(key);
    };
    return StorageDriver;
}());
exports.StorageDriver = StorageDriver;
//# sourceMappingURL=storage.driver.js.map