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
    function ProfileFavoritesComponent(clientApi) {
        this.clientApi = clientApi;
        this.currentUser = this.clientApi.getCachedCurrent();
    }
    ProfileFavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientApi.getCompanies(this.currentUser.id).subscribe(function (data) {
            _this.companyList = data;
        });
    };
    ProfileFavoritesComponent = __decorate([
        core_1.Component({
            selector: 'profile-favorites',
            templateUrl: 'scripts/components/profile/favorites/profile-favorites.component.html',
            styleUrls: ['scripts/components/profile/favorites/profile-favorites.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [index_1.ClientApi])
    ], ProfileFavoritesComponent);
    return ProfileFavoritesComponent;
}());
exports.ProfileFavoritesComponent = ProfileFavoritesComponent;
//# sourceMappingURL=profile-favorites.component.js.map