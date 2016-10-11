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
var router_1 = require('@angular/router');
var index_1 = require('../../shared/index');
var CompanyListPageComponent = (function () {
    function CompanyListPageComponent(route, companyApi) {
        this.route = route;
        this.companyApi = companyApi;
        this.categoryId = null;
        this.companyList = [];
        this.categoryId = this.route.snapshot.queryParams['category'];
    }
    CompanyListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resizeMapListWrapper();
        $(window).on('resize', function () { return _this.resizeMapListWrapper(); });
        this.route.queryParams.subscribe(function (params) {
            _this.categoryId = 'categoryId' in params ? params['categoryId'] : null;
            _this.getCompanyList();
        });
    };
    CompanyListPageComponent.prototype.resizeMapListWrapper = function () {
        var windowHeight = $(window).height();
        var headerHeight = $('app-header').height();
        $('#map-list-wrapper').height(windowHeight - headerHeight);
    };
    CompanyListPageComponent.prototype.onBoundsChanged = function (bounds) {
        this.bounds = bounds.toJSON();
        this.getCompanyList();
    };
    CompanyListPageComponent.prototype.getCompanyList = function () {
        var _this = this;
        // Get companyList only when city and category filters are checked
        if (this.bounds && this.categoryId) {
            this.companyApi.byGeo(this.bounds.west + ", " + this.bounds.north + ", " + this.bounds.east + ", " + this.bounds.south, this.categoryId).subscribe(function (companyList) {
                _this.companyList = companyList;
            });
        }
    };
    CompanyListPageComponent = __decorate([
        core_1.Component({
            selector: 'company-list-page',
            templateUrl: 'scripts/pages/company-list/company-list-page.component.html',
            styleUrls: ['scripts/pages/company-list/company-list-page.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, index_1.CompanyApi])
    ], CompanyListPageComponent);
    return CompanyListPageComponent;
}());
exports.CompanyListPageComponent = CompanyListPageComponent;
//# sourceMappingURL=company-list-page.component.js.map