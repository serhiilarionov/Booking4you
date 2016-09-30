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
var CompanyListComponent = (function () {
    function CompanyListComponent() {
        this.gridTypeView = false;
        this.filterActive = false;
        this.viewTypeActive = true;
        this.showTitle = true;
    }
    CompanyListComponent.prototype.setViewType = function (value) {
        switch (value) {
            case 'grid':
                this.gridTypeView = true;
                break;
            case 'list':
                this.gridTypeView = false;
                break;
            default:
                this.gridTypeView = false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CompanyListComponent.prototype, "gridTypeView", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CompanyListComponent.prototype, "filterActive", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CompanyListComponent.prototype, "viewTypeActive", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CompanyListComponent.prototype, "showTitle", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CompanyListComponent.prototype, "companyList", void 0);
    CompanyListComponent = __decorate([
        core_1.Component({
            selector: 'company-list',
            templateUrl: 'scripts/components/company/list/company-list.component.html',
            styleUrls: ['scripts/components/company/list/company-list.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], CompanyListComponent);
    return CompanyListComponent;
}());
exports.CompanyListComponent = CompanyListComponent;
//# sourceMappingURL=company-list.component.js.map