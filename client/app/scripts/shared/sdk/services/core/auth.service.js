"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable */
var core_1 = require('@angular/core');
var storage_driver_1 = require('../../storage/storage.driver');
var LoopBackAuth = (function () {
    function LoopBackAuth() {
        this.propsPrefix = '$LoopBack$';
        this.accessTokenId = this.load("accessTokenId");
        this.currentUserId = this.load("currentUserId");
        this.rememberMe = this.load("rememberMe");
        this.currentUserData = null;
    }
    LoopBackAuth.prototype.setRememberMe = function (value) {
        this.rememberMe = value;
        return this;
    };
    LoopBackAuth.prototype.getCurrentUserId = function () {
        return this.currentUserId;
    };
    LoopBackAuth.prototype.setCurrentUserData = function (data) {
        this.currentUserData = data;
        return this;
    };
    LoopBackAuth.prototype.getCurrentUserData = function () {
        return this.currentUserData;
    };
    LoopBackAuth.prototype.getAccessTokenId = function () {
        return this.accessTokenId;
    };
    LoopBackAuth.prototype.save = function () {
        this.saveThis("accessTokenId", this.accessTokenId);
        this.saveThis("currentUserId", this.currentUserId);
        this.saveThis("rememberMe", this.rememberMe);
    };
    ;
    LoopBackAuth.prototype.setUser = function (accessTokenId, userId, userData) {
        this.accessTokenId = accessTokenId;
        this.currentUserId = userId;
        this.currentUserData = userData;
    };
    LoopBackAuth.prototype.clearUser = function () {
        this.accessTokenId = null;
        this.currentUserId = null;
        this.currentUserData = null;
    };
    LoopBackAuth.prototype.clearStorage = function () {
        storage_driver_1.StorageDriver.remove(this.propsPrefix + 'accessTokenId');
        storage_driver_1.StorageDriver.remove(this.propsPrefix + 'currentUserId');
        storage_driver_1.StorageDriver.remove(this.propsPrefix + 'rememberMe');
    };
    ;
    LoopBackAuth.prototype.saveThis = function (name, value) {
        try {
            var key = this.propsPrefix + name;
            storage_driver_1.StorageDriver.set(key, value);
        }
        catch (err) {
            console.log('Cannot access local/session storage:', err);
        }
    };
    LoopBackAuth.prototype.load = function (name) {
        var key = this.propsPrefix + name;
        return storage_driver_1.StorageDriver.get(key);
    };
    LoopBackAuth = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LoopBackAuth);
    return LoopBackAuth;
}());
exports.LoopBackAuth = LoopBackAuth;
//# sourceMappingURL=auth.service.js.map