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
var core_1 = require('@angular/core');
var AuthRedirectService = (function () {
    function AuthRedirectService() {
        this.redirectUrl = null;
    }
    AuthRedirectService.prototype.setRedirectUrl = function (url) {
        this.redirectUrl = url;
    };
    AuthRedirectService.prototype.getRedirectUrl = function () {
        var redirectUrl = this.redirectUrl ? this.redirectUrl : '/';
        this.deleteRedirectUrl();
        return redirectUrl;
    };
    AuthRedirectService.prototype.deleteRedirectUrl = function () {
        this.redirectUrl = null;
    };
    AuthRedirectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthRedirectService);
    return AuthRedirectService;
}());
exports.AuthRedirectService = AuthRedirectService;
//# sourceMappingURL=auth-redirect.service.js.map