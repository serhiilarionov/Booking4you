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
var BaseModels_1 = require('../../models/BaseModels');
/**
 * @module LoopBackAuth
 * @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
 * @license MTI
 * @description
 * Provides with a LoopBack compatible authentication mechanism.
 */
var LoopBackAuth = (function () {
    function LoopBackAuth() {
        this.token = new BaseModels_1.SDKToken();
        this.prefix = '$LoopBackSDK$';
        this.token.id = this.load('id');
        this.token.user = this.load('user');
        this.token.userId = this.load('userId');
        this.token.rememberMe = this.load('rememberMe');
    }
    LoopBackAuth.prototype.setRememberMe = function (value) {
        this.token.rememberMe = value;
    };
    LoopBackAuth.prototype.getToken = function () {
        return this.token;
    };
    LoopBackAuth.prototype.getAccessTokenId = function () {
        return this.token.id;
    };
    LoopBackAuth.prototype.getCurrentUserId = function () {
        return this.token.userId;
    };
    LoopBackAuth.prototype.getCurrentUserData = function () {
        return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
    };
    LoopBackAuth.prototype.save = function () {
        if (this.token.rememberMe) {
            this.persist('id', this.token.id);
            this.persist('user', this.token.user);
            this.persist('userId', this.token.userId);
            this.persist('rememberMe', this.token.rememberMe);
        }
    };
    ;
    LoopBackAuth.prototype.setUser = function (token) {
        this.token = Object.assign(this.token, token);
    };
    LoopBackAuth.prototype.load = function (prop) {
        return storage_driver_1.StorageDriver.get("" + this.prefix + prop);
    };
    LoopBackAuth.prototype.clear = function () {
        var _this = this;
        Object.keys(this.token).forEach(function (prop) { return storage_driver_1.StorageDriver.remove("" + _this.prefix + prop); });
        this.token = new BaseModels_1.SDKToken();
    };
    // I do not persist everything in 1 value because I want
    // to decouple user from token data. User can be larger than
    // expected and will be easier to handle as will perform better.
    LoopBackAuth.prototype.persist = function (prop, value) {
        try {
            storage_driver_1.StorageDriver.set("" + this.prefix + prop, (typeof value === 'object') ? JSON.stringify(value) : value);
        }
        catch (err) {
            console.error('Cannot access local/session storage:', err);
        }
    };
    LoopBackAuth = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LoopBackAuth);
    return LoopBackAuth;
}());
exports.LoopBackAuth = LoopBackAuth;
//# sourceMappingURL=auth.service.js.map