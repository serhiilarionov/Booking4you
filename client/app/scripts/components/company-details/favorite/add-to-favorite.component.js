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
var index_1 = require('../../../shared/index');
var CompanyAddToUserFavorite = (function () {
    function CompanyAddToUserFavorite(clientApi, broadcaster) {
        var _this = this;
        this.clientApi = clientApi;
        this.broadcaster = broadcaster;
        this.isAdded = false;
        this.currentUser = this.clientApi.getCachedCurrent();
        this.broadcaster.subscribe(function (eventType) {
            if (eventType === index_1.EventTypes.LOGGED_IN) {
                _this.currentUser = _this.clientApi.getCachedCurrent();
            }
        });
    }
    CompanyAddToUserFavorite.prototype.ngOnInit = function () {
        this.checkForFavoriteExists();
    };
    CompanyAddToUserFavorite.prototype.checkForFavoriteExists = function () {
        var _this = this;
        if (!this.currentUser) {
            return;
        }
        this.clientApi.existsCompanies(this.currentUser.id, this.companyId).subscribe(function () {
            _this.isAdded = true;
        }, function (error) {
            return;
        });
    };
    CompanyAddToUserFavorite.prototype.toggleFavorite = function () {
        var _this = this;
        if (this.isAdded) {
            this.clientApi.unlinkCompanies(this.currentUser.id, this.companyId).subscribe(function () {
                _this.isAdded = false;
            });
            return;
        }
        this.clientApi.linkCompanies(this.currentUser.id, this.companyId).subscribe(function () {
            _this.isAdded = true;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CompanyAddToUserFavorite.prototype, "companyId", void 0);
    CompanyAddToUserFavorite = __decorate([
        core_1.Component({
            selector: 'add-to-favorite',
            templateUrl: 'scripts/components/company-details/favorite/add-to-favorite.component.html',
            styleUrls: ['scripts/components/company-details/favorite/add-to-favorite.component.css']
        }),
        __param(1, core_1.Inject(index_1.Broadcaster)), 
        __metadata('design:paramtypes', [index_1.ClientApi, index_1.Broadcaster])
    ], CompanyAddToUserFavorite);
    return CompanyAddToUserFavorite;
}());
exports.CompanyAddToUserFavorite = CompanyAddToUserFavorite;
//# sourceMappingURL=add-to-favorite.component.js.map