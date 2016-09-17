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
var forms_1 = require('@angular/forms');
var index_1 = require('../../shared/index');
var HeroComponent = (function () {
    function HeroComponent(auth, cityApi, categoryApi, clientApi, formBuilder, router) {
        this.auth = auth;
        this.cityApi = cityApi;
        this.categoryApi = categoryApi;
        this.clientApi = clientApi;
        this.formBuilder = formBuilder;
        this.router = router;
        this.searchForm = this.formBuilder.group({
            city: ['', forms_1.Validators.required],
            category: ['', forms_1.Validators.required]
        });
    }
    HeroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cityApi.find().subscribe(function (cities) { return _this.cities = cities; });
        this.categoryApi.find().subscribe(function (categories) { return _this.categories = categories; });
    };
    HeroComponent.prototype.onSubmit = function () {
        if (this.searchForm.valid) {
            var navigationExtras = {
                queryParams: this.searchForm.value
            };
            this.router.navigate(['/company-list'], navigationExtras);
        }
    };
    HeroComponent = __decorate([
        core_1.Component({
            selector: 'hero',
            templateUrl: './scripts/components/hero/hero.component.html',
            styleUrls: ['./scripts/components/hero/hero.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.LoopBackAuth, index_1.CityApi, index_1.CategoryApi, index_1.ClientApi, forms_1.FormBuilder, router_1.Router])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map