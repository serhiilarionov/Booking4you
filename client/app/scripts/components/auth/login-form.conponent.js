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
var index_1 = require('../../shared/index');
var forms_1 = require('@angular/forms');
var index_2 = require('../../shared/index');
var router_1 = require('@angular/router');
var LoginFormComponent = (function () {
    function LoginFormComponent(clientApi, formBuilder, router, authRedirect, broadcaster) {
        this.clientApi = clientApi;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authRedirect = authRedirect;
        this.broadcaster = broadcaster;
        this.submitted = false;
        this.passwordMinLength = index_2.PASSWORD_MIN_LENGTH;
        index_2.LoopBackConfig.setBaseURL(index_2.BASE_URL);
        index_2.LoopBackConfig.setApiVersion(index_2.API_VERSION);
        this.loginForm = this.formBuilder.group({
            email: ['',
                forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern(index_2.EMAIL_REGEX)
                ])
            ],
            password: ['',
                forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(index_2.PASSWORD_MIN_LENGTH)
                ])
            ]
        });
    }
    LoginFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.loginForm.valid) {
            this.login(this.loginForm.value);
        }
    };
    LoginFormComponent.prototype.login = function (credentials) {
        var _this = this;
        this.clientApi.login(credentials).subscribe(function () {
            _this.broadcaster.emit(index_2.EventTypes.LOGGED_IN);
            _this.router.navigate([_this.authRedirect.getRedirectUrl()]);
        });
    };
    LoginFormComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'scripts/components/auth/login-form.component.html'
        }),
        __param(3, core_1.Inject(index_2.AuthRedirectService)),
        __param(4, core_1.Inject(index_1.Broadcaster)), 
        __metadata('design:paramtypes', [index_2.ClientApi, forms_1.FormBuilder, router_1.Router, index_2.AuthRedirectService, index_1.Broadcaster])
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login-form.conponent.js.map