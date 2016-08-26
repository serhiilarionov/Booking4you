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
var company_list_component_1 = require('../../components/company/company-list.component');
var CompanyListPageComponent = (function () {
    function CompanyListPageComponent() {
    }
    CompanyListPageComponent = __decorate([
        core_1.Component({
            selector: 'company-list-page[company-list-page]',
            templateUrl: 'scripts/pages/company-list/company-list-page.component.html',
            styleUrls: ['scripts/pages/company-list/company-list-page.component.css'],
            directives: [company_list_component_1.CompanyListComponent],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], CompanyListPageComponent);
    return CompanyListPageComponent;
}());
exports.CompanyListPageComponent = CompanyListPageComponent;
//# sourceMappingURL=company-list-page.component.js.map