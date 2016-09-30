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
var index_1 = require('../../../shared/index');
var CompanyFilterComponent = (function () {
    function CompanyFilterComponent(route, router, cityApi, categoryApi) {
        this.route = route;
        this.router = router;
        this.cityApi = cityApi;
        this.categoryApi = categoryApi;
        this.filter = { where: { cityId: null, categoryId: null }, limit: 100 };
        this.navigationExtras = { queryParams: {} };
    }
    CompanyFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cityApi.find().subscribe(function (cityList) {
            _this.cityList = cityList;
        });
        this.categoryApi.find().subscribe(function (categoryList) {
            _this.categoryList = categoryList;
        });
        this.route.queryParams.subscribe(function (params) {
            _this.filter.where = {
                cityId: params['city'],
                categoryId: params['category']
            };
        });
    };
    CompanyFilterComponent.prototype.onCitySelected = function (cityId) {
        this.filter.where.cityId = cityId;
        this.navigateAfterSelected();
    };
    CompanyFilterComponent.prototype.onCategorySelected = function (categoryId) {
        this.filter.where.categoryId = categoryId;
        this.navigateAfterSelected();
    };
    CompanyFilterComponent.prototype.navigateAfterSelected = function () {
        this.navigationExtras.queryParams = {
            category: this.filter.where.categoryId,
            city: this.filter.where.cityId
        };
        this.router.navigate(['/company-list'], this.navigationExtras);
    };
    CompanyFilterComponent = __decorate([
        core_1.Component({
            selector: 'company-filter',
            templateUrl: 'scripts/components/company/filter/company-filter.component.html',
            styleUrls: ['scripts/components/company/filter/company-filter.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, index_1.CityApi, index_1.CategoryApi])
    ], CompanyFilterComponent);
    return CompanyFilterComponent;
}());
exports.CompanyFilterComponent = CompanyFilterComponent;
//# sourceMappingURL=company-filter.component.js.map