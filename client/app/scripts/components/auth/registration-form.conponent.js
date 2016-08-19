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
var custom_validators_1 = require('../../common/custom-validators');
var RegistrationFormComponent = (function () {
    function RegistrationFormComponent(formBuilder, constants) {
        this.formBuilder = formBuilder;
        this.constants = constants;
        this.submitted = false;
        this.registrationForm = this.formBuilder.group({
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern(this.constants.EMAIL_REGEX)
                ])],
            passwords: this.formBuilder.group({
                password: ['', forms_1.Validators.compose([
                        forms_1.Validators.required,
                        forms_1.Validators.minLength(this.constants.PASSWORD_MIN_LENGTH)
                    ])],
                confirmPassword: ['', forms_1.Validators.compose([
                        forms_1.Validators.required
                    ])]
            }, { validator: custom_validators_1.CustomValidators.areEqual })
        });
    }
    RegistrationFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.registrationForm.valid) {
        }
    };
    RegistrationFormComponent = __decorate([
        core_1.Component({
            selector: 'registration-form',
            templateUrl: 'scripts/components/auth/registration-form.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, constants_1.Constants])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());
exports.RegistrationFormComponent = RegistrationFormComponent;
//# sourceMappingURL=registration-form.conponent.js.map