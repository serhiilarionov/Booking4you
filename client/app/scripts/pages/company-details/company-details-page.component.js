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
var CompanyDetailsPageComponent = (function () {
    function CompanyDetailsPageComponent(companyApi, companyDetailApi, activatedRoute) {
        this.companyApi = companyApi;
        this.companyDetailApi = companyDetailApi;
        this.activatedRoute = activatedRoute;
        this.srcArray = [];
    }
    CompanyDetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.queryId = +params['id'];
            _this.srcArray = [];
            _this.companyApi.findById(_this.queryId).subscribe(function (company) {
                _this.company = company;
                _this.companyDetailApi.findById(_this.queryId).subscribe(function (companyDetail) {
                    _this.srcArray = companyDetail.imageList.map(function (imageName) {
                        return index_1.BASE_URL + "/storage/test/" + _this.company.cityId + "/" + _this.company.categoryId + "/" + _this.company.id + "/" + imageName;
                    });
                });
            }, function (error) {
                _this.companyNotFound = true;
            });
        });
    };
    CompanyDetailsPageComponent = __decorate([
        core_1.Component({
            selector: 'company-details-page',
            templateUrl: 'scripts/pages/company-details/company-details-page.component.html',
            styleUrls: ['scripts/pages/company-details/company-details-page.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [index_1.CompanyApi, index_1.CompanyDetailApi, router_1.ActivatedRoute])
    ], CompanyDetailsPageComponent);
    return CompanyDetailsPageComponent;
}());
exports.CompanyDetailsPageComponent = CompanyDetailsPageComponent;
//# sourceMappingURL=company-details-page.component.js.map