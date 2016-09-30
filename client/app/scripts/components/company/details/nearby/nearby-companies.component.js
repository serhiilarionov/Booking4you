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
var index_1 = require('../../../../shared/index');
var NearbyCompanies = (function () {
    function NearbyCompanies(companyApi) {
        this.companyApi = companyApi;
    }
    NearbyCompanies.prototype.ngOnInit = function () {
        var _this = this;
        this.nearbyFilter = {
            where: {
                cityId: this.companyDetails.cityId,
                categoryId: this.companyDetails.categoryId,
                id: { neq: this.companyDetails.id }
            },
            limit: 3
        };
        this.companyApi.find(this.nearbyFilter).subscribe(function (companyList) {
            _this.companyList = companyList;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NearbyCompanies.prototype, "companyDetails", void 0);
    NearbyCompanies = __decorate([
        core_1.Component({
            selector: 'nearby-companies',
            templateUrl: 'scripts/components/company/details/nearby/nearby-companies.component.html',
            styleUrls: ['scripts/components/company/details/nearby/nearby-companies.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.CompanyApi])
    ], NearbyCompanies);
    return NearbyCompanies;
}());
exports.NearbyCompanies = NearbyCompanies;
//# sourceMappingURL=nearby-companies.component.js.map