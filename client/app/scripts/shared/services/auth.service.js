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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var index_1 = require('../index');
var AuthService = (function () {
    function AuthService(clientApi) {
        this.clientApi = clientApi;
        this.currentUser = new core_1.EventEmitter();
        this.updateCurrentUser();
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        this.clientApi.login(credentials).subscribe(function () { return _this.updateCurrentUser(); });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.clientApi.logout().subscribe(function () { return _this.updateCurrentUser(); });
    };
    AuthService.prototype.updateCurrentUser = function () {
        this.currentUser.next(this.clientApi.getCachedCurrent());
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return index_1.ClientApi; }))), 
        __metadata('design:paramtypes', [index_1.ClientApi])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map