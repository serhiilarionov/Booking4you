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
var CompanyListPageComponent = (function () {
    function CompanyListPageComponent(router, broadcaster) {
        var _this = this;
        this.router = router;
        this.broadcaster = broadcaster;
        this.broadcaster.subscribe(function (next) {
            if (next === index_1.EventTypes.LOGGED_OUT) {
                _this.router.navigate(['/']);
            }
        });
    }
    CompanyListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resizeMapListWrapper();
        $(window).on('resize', function () { return _this.resizeMapListWrapper(); });
    };
    CompanyListPageComponent.prototype.resizeMapListWrapper = function () {
        var windowHeight = $(window).height();
        var headerHeight = $('app-header').height();
        $('#map-list-wrapper').height(windowHeight - headerHeight);
    };
    CompanyListPageComponent = __decorate([
        core_1.Component({
            selector: 'company-list-page[company-list-page]',
            templateUrl: 'scripts/pages/company-list/company-list-page.component.html',
            styleUrls: ['scripts/pages/company-list/company-list-page.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Inject(index_1.Broadcaster)), 
        __metadata('design:paramtypes', [router_1.Router, index_1.Broadcaster])
    ], CompanyListPageComponent);
    return CompanyListPageComponent;
}());
exports.CompanyListPageComponent = CompanyListPageComponent;
//# sourceMappingURL=company-list-page.component.js.map