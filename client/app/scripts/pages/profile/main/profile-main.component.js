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
var index_1 = require('../../../shared/index');
var forms_1 = require('@angular/forms');
var ProfileMainComponent = (function () {
    function ProfileMainComponent(clientApi, formBuilder) {
        this.clientApi = clientApi;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.passwordMinLength = index_1.PASSWORD_MIN_LENGTH;
        this.currentUser = this.clientApi.getCachedCurrent();
        this.changePassForm = this.formBuilder.group({
            newPass: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(this.passwordMinLength)])],
            newPassConfirm: ['', forms_1.Validators.required]
        }, { validator: index_1.CustomValidators.areEqual });
    }
    ProfileMainComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.changePassForm.valid) {
            this.clientApi.upsert({
                id: this.currentUser.id,
                password: this.changePassForm.value.newPass
            }).subscribe(function () { _this.success = true; }, function (error) { console.log(error); });
        }
    };
    ProfileMainComponent = __decorate([
        core_1.Component({
            selector: 'profile-main',
            templateUrl: 'scripts/pages/profile/main/profile-main.component.html',
            styleUrls: ['scripts/pages/profile/main/profile-main.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.ClientApi, forms_1.FormBuilder])
    ], ProfileMainComponent);
    return ProfileMainComponent;
}());
exports.ProfileMainComponent = ProfileMainComponent;
//# sourceMappingURL=profile-main.component.js.map