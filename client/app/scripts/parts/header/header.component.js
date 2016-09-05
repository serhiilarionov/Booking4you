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
var HeaderComponent = (function () {
    function HeaderComponent(sidebar, auth, clientApi, broadcaster) {
        var _this = this;
        this.sidebar = sidebar;
        this.auth = auth;
        this.clientApi = clientApi;
        this.broadcaster = broadcaster;
        this.broadcaster.subscribe(function (eventType) {
            if (eventType === index_1.EventTypes.LOGGED_IN) {
                _this.currentUser = _this.clientApi.getCachedCurrent();
            }
        });
    }
    HeaderComponent.prototype.onSidebarToggle = function () {
        this.sidebar.toggle();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.clientApi.isAuthenticated()) {
            this.clientApi.getCurrent().subscribe(function (user) { return _this.currentUser = user; });
        }
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.clientApi.logout().subscribe(function () {
            _this.broadcaster.emit(index_1.EventTypes.LOGGED_OUT);
            _this.currentUser = null;
        });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: 'scripts/parts/header/header.component.html',
            styleUrls: ['scripts/parts/header/header.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(3, core_1.Inject(index_1.Broadcaster)), 
        __metadata('design:paramtypes', [index_1.SidebarService, index_1.LoopBackAuth, index_1.ClientApi, index_1.Broadcaster])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map