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
var index_1 = require('./shared/index');
var index_2 = require('./shared/index');
var auth_service_1 = require('./shared/sdk/services/core/auth.service');
var AppComponent = (function () {
    function AppComponent(sidebar, el, router, clientApi, loopBackAuth, broadcaster) {
        var _this = this;
        this.sidebar = sidebar;
        this.el = el;
        this.router = router;
        this.clientApi = clientApi;
        this.loopBackAuth = loopBackAuth;
        this.broadcaster = broadcaster;
        this.$el = $(el.nativeElement);
        index_2.LoopBackConfig.setBaseURL(index_2.BASE_URL);
        index_2.LoopBackConfig.setApiVersion(index_2.API_VERSION);
        this.sidebar.toggled$.subscribe(function () {
            _this.$el.toggleClass('sidebar-opened');
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd && _this.sidebar.opened) {
                _this.sidebar.toggle();
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.clientApi.isAuthenticated()) {
            this.clientApi.getCurrent().subscribe(function (user) {
                _this.loopBackAuth.setCurrentUserData(user);
                _this.broadcaster.next(index_2.EventTypes.LOGGED_IN);
                _this.currentUser = user;
            });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'scripts/app.component.html',
            styleUrls: ['scripts/app.component.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __param(5, core_1.Inject(index_2.Broadcaster)), 
        __metadata('design:paramtypes', [index_1.SidebarService, core_1.ElementRef, router_1.Router, index_2.ClientApi, auth_service_1.LoopBackAuth, index_2.Broadcaster])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map