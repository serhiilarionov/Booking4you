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
var forms_1 = require('@angular/forms');
var index_1 = require('../../shared/index');
var HeroComponent = (function () {
    function HeroComponent(auth, cityApi, clientApi, formBuilder) {
        this.auth = auth;
        this.cityApi = cityApi;
        this.clientApi = clientApi;
        this.formBuilder = formBuilder;
        this.searchForm = this.formBuilder.group({
            city: [''],
            category: ['']
        });
    }
    HeroComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.clientApi.isAuthenticated()) {
            this.cityApi.find().subscribe(function (cities) { return _this.cities = cities; });
        }
    };
    HeroComponent = __decorate([
        core_1.Component({
            selector: 'hero',
            templateUrl: './scripts/components/hero/hero.component.html',
            styleUrls: ['./scripts/components/hero/hero.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.LoopBackAuth, index_1.CityApi, index_1.ClientApi, forms_1.FormBuilder])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map