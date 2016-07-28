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
var login_form_conponent_1 = require('../../components/auth/login/login-form.conponent');
var LoginPageComponent = (function () {
    function LoginPageComponent() {
    }
    LoginPageComponent = __decorate([
        core_1.Component({
            selector: '[login-page][id=page-content]',
            templateUrl: 'scripts/pages/login/login-page.component.html',
            directives: [login_form_conponent_1.LoginFormComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginPageComponent);
    return LoginPageComponent;
}());
exports.LoginPageComponent = LoginPageComponent;
//# sourceMappingURL=login-page.component.js.map