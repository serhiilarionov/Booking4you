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
var core_2 = require('angular2-google-maps/core');
var OnMapLoaded = (function () {
    function OnMapLoaded(googleMapsAPIWrapper) {
        this.googleMapsAPIWrapper = googleMapsAPIWrapper;
        this.onMapLoaded = new core_1.EventEmitter();
    }
    OnMapLoaded.prototype.ngOnInit = function () {
        this.onMapLoaded.next(this.googleMapsAPIWrapper);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], OnMapLoaded.prototype, "onMapLoaded", void 0);
    OnMapLoaded = __decorate([
        core_1.Directive({
            selector: '[onMapLoaded]'
        }), 
        __metadata('design:paramtypes', [core_2.GoogleMapsAPIWrapper])
    ], OnMapLoaded);
    return OnMapLoaded;
}());
exports.OnMapLoaded = OnMapLoaded;
//# sourceMappingURL=on-map-loaded.directive.js.map