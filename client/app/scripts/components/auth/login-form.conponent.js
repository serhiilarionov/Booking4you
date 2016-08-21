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
var forms_1 = require('@angular/forms');
var constants_1 = require('../../common/services/constants');
var LoginFormComponent = (function () {
    function LoginFormComponent(constants, formBuilder) {
        this.constants = constants;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.loginForm = this.formBuilder.group({
            email: ['',
                forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern(this.constants.EMAIL_REGEX)
                ])
            ],
            password: ['',
                forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(this.constants.PASSWORD_MIN_LENGTH)
                ])
            ]
        });
    }
    LoginFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.loginForm.valid) {
        }
    };
    LoginFormComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'scripts/components/auth/login-form.component.html'
        }), 
        __metadata('design:paramtypes', [constants_1.Constants, forms_1.FormBuilder])
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login-form.conponent.js.map