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
var forms_1 = require('@angular/forms');
var index_1 = require('../../shared/index');
var RegistrationFormComponent = (function () {
    function RegistrationFormComponent(formBuilder, clientApi, router, authRedirect, broadcaster) {
        this.formBuilder = formBuilder;
        this.clientApi = clientApi;
        this.router = router;
        this.authRedirect = authRedirect;
        this.broadcaster = broadcaster;
        this.submitted = false;
        this.passwordMinLength = index_1.PASSWORD_MIN_LENGTH;
        this.data = null;
        this.registrationForm = this.formBuilder.group({
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern(index_1.EMAIL_REGEX)
                ])],
            passwords: this.formBuilder.group({
                password: ['', forms_1.Validators.compose([
                        forms_1.Validators.required,
                        forms_1.Validators.minLength(index_1.PASSWORD_MIN_LENGTH)
                    ])],
                confirmPassword: ['', forms_1.Validators.compose([
                        forms_1.Validators.required
                    ])]
            }, { validator: index_1.CustomValidators.areEqual })
        });
    }
    RegistrationFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.registrationForm.valid) {
            this.data = {
                email: this.registrationForm.value.email,
                password: this.registrationForm.value.passwords.password
            };
            this.register(this.data);
        }
    };
    RegistrationFormComponent.prototype.register = function (userData) {
        var _this = this;
        this.clientApi.create(userData).subscribe(function () {
            // login on success
            _this.clientApi.login(_this.data).subscribe(function () {
                _this.broadcaster.emit(index_1.EventTypes.LOGGED_IN);
                _this.router.navigate([_this.authRedirect.getRedirectUrl()]);
            });
        }, function (error) {
            console.log(error);
        });
    };
    RegistrationFormComponent = __decorate([
        core_1.Component({
            selector: 'registration-form',
            templateUrl: 'scripts/components/auth/registration-form.component.html'
        }),
        __param(3, core_1.Inject(index_1.AuthRedirectService)),
        __param(4, core_1.Inject(index_1.Broadcaster)), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, index_1.ClientApi, router_1.Router, index_1.AuthRedirectService, index_1.Broadcaster])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());
exports.RegistrationFormComponent = RegistrationFormComponent;
//# sourceMappingURL=registration-form.conponent.js.map