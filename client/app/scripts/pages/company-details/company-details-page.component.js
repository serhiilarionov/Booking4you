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
var CompanyDetailsPageComponent = (function () {
    function CompanyDetailsPageComponent(companyApi, route, router, clientApi, broadcaster) {
        var _this = this;
        this.companyApi = companyApi;
        this.route = route;
        this.router = router;
        this.clientApi = clientApi;
        this.broadcaster = broadcaster;
        this.addState = false;
        this.currentUser = this.clientApi.getCachedCurrent();
        this.broadcaster.subscribe(function (eventType) {
            if (eventType === index_1.EventTypes.LOGGED_IN) {
                _this.currentUser = _this.clientApi.getCachedCurrent();
                _this.checkForExists();
            }
        });
    }
    CompanyDetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyId = this.route.params.subscribe(function (params) {
            _this.queryId = +params['id'];
        });
        this.companyApi.findById(this.queryId).subscribe(function (company) {
            _this.companyDetails = company;
        }, function (error) {
            _this.router.navigate(['/comming-soon']);
        });
    };
    CompanyDetailsPageComponent.prototype.ngOnDestroy = function () {
        this.companyId.unsubscribe();
    };
    CompanyDetailsPageComponent.prototype.addToFavorite = function () {
        var _this = this;
        this.clientApi.linkCompanies(this.currentUser.id, this.queryId).subscribe(function () {
            _this.addState = true;
        });
    };
    CompanyDetailsPageComponent.prototype.checkForExists = function () {
        var _this = this;
        if (!this.currentUser) {
            return;
        }
        this.clientApi.existsCompanies(this.currentUser.id, this.queryId).subscribe(function (data) {
            _this.addState = true;
        }, function (error) {
            _this.addState = false;
        });
    };
    CompanyDetailsPageComponent = __decorate([
        core_1.Component({
            selector: 'company-details-page',
            templateUrl: 'scripts/pages/company-details/company-details-page.component.html',
            styleUrls: ['scripts/pages/company-details/company-details-page.component.css']
        }),
        __param(4, core_1.Inject(index_1.Broadcaster)), 
        __metadata('design:paramtypes', [index_1.CompanyApi, router_1.ActivatedRoute, router_1.Router, index_1.ClientApi, index_1.Broadcaster])
    ], CompanyDetailsPageComponent);
    return CompanyDetailsPageComponent;
}());
exports.CompanyDetailsPageComponent = CompanyDetailsPageComponent;
// TODO: add 404 page for non existing companies
//# sourceMappingURL=company-details-page.component.js.map