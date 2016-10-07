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
var index_1 = require('../../../shared/index');
var ProfileFavoritesComponent = (function () {
    function ProfileFavoritesComponent(clientApi, categoryApi) {
        this.clientApi = clientApi;
        this.categoryApi = categoryApi;
        this.categoryIdList = [];
        this.filter = { where: { id: { inq: [] } } };
        this.currentUser = this.clientApi.getCachedCurrent();
    }
    ProfileFavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientApi.getCompanies(this.currentUser.id)
            .subscribe(function (companyList) {
            _this.companyList = companyList;
            if (_this.companyList.length) {
                Object.keys(_this.companyList).map(function (company) {
                    if (_this.categoryIdList.indexOf(_this.companyList[company]['categoryId']) === -1) {
                        _this.categoryIdList.push(_this.companyList[company]['categoryId']);
                    }
                });
                _this.filter.where.id.inq = _this.categoryIdList;
                _this.getCategories();
            }
        });
    };
    ProfileFavoritesComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryApi.find(this.filter)
            .subscribe(function (categoryList) {
            _this.categoryList = categoryList;
        });
    };
    ProfileFavoritesComponent = __decorate([
        core_1.Component({
            selector: 'profile-favorites',
            templateUrl: 'scripts/pages/profile/favorites/profile-favorites.component.html',
            styleUrls: ['scripts/pages/profile/favorites/profile-favorites.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [index_1.ClientApi, index_1.CategoryApi])
    ], ProfileFavoritesComponent);
    return ProfileFavoritesComponent;
}());
exports.ProfileFavoritesComponent = ProfileFavoritesComponent;
//# sourceMappingURL=profile-favorites.component.js.map