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
var router_1 = require('@angular/router');
var index_1 = require('../../shared/index');
var AuthGuardService = (function () {
    function AuthGuardService(clientApi, authRedirect, router) {
        this.clientApi = clientApi;
        this.authRedirect = authRedirect;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (next, state) {
        // don't let authenticated user go to login or registration pages
        if (state.url === '/login' || state.url === '/registration') {
            if (this.clientApi.isAuthenticated()) {
                this.router.navigate(['/']);
                return false;
            }
            else {
                return true;
            }
        }
        // for all another pages that require auth
        if (this.clientApi.isAuthenticated()) {
            return true;
        }
        this.authRedirect.setRedirectUrl(state.url);
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return index_1.ClientApi; }))),
        __param(1, core_1.Inject(core_1.forwardRef(function () { return index_1.AuthRedirectService; }))), 
        __metadata('design:paramtypes', [index_1.ClientApi, index_1.AuthRedirectService, router_1.Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;
//# sourceMappingURL=auth-guard.service.js.map