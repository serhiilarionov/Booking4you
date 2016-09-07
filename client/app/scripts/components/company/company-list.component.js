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
var index_1 = require('../../shared/index');
var CompanyListComponent = (function () {
    function CompanyListComponent(companyApi, cityApi, categoryApi) {
        this.companyApi = companyApi;
        this.cityApi = cityApi;
        this.categoryApi = categoryApi;
        this.companyListLoaded = new core_1.EventEmitter();
        this.filter = { where: { cityId: null, categoryId: null } };
    }
    // OnInit we should get cities and categories for filters
    CompanyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cityApi.find().subscribe(function (cityList) {
            _this.cityList = cityList;
        });
        this.categoryApi.find().subscribe(function (categoryList) {
            _this.categoryList = categoryList;
        });
    };
    CompanyListComponent.prototype.onCitySelected = function (cityId) {
        this.filter.where.cityId = cityId;
        this.getCompanyList();
    };
    CompanyListComponent.prototype.onCategorySelected = function (categoryId) {
        this.filter.where.categoryId = categoryId;
        this.getCompanyList();
    };
    CompanyListComponent.prototype.getCompanyList = function () {
        var _this = this;
        // Get companyList only when city and category filters are checked
        if (this.filter.where.cityId && this.filter.where.categoryId) {
            this.companyApi.find(this.filter).subscribe(function (companyList) {
                _this.companyList = companyList;
                _this.companyListLoaded.next(_this.companyList);
            });
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CompanyListComponent.prototype, "companyListLoaded", void 0);
    CompanyListComponent = __decorate([
        core_1.Component({
            selector: 'company-list',
            templateUrl: 'scripts/components/company/company-list.component.html',
            styleUrls: ['scripts/components/company/company-list.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [index_1.CompanyApi, index_1.CityApi, index_1.CategoryApi])
    ], CompanyListComponent);
    return CompanyListComponent;
}());
exports.CompanyListComponent = CompanyListComponent;
//# sourceMappingURL=company-list.component.js.map