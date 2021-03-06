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
var OnMarkerLoaded = (function () {
    function OnMarkerLoaded(markerManager, marker) {
        this.markerManager = markerManager;
        this.marker = marker;
        this.onMarkerLoaded = new core_1.EventEmitter();
    }
    OnMarkerLoaded.prototype.ngOnInit = function () {
        var _this = this;
        this.markerManager.getNativeMarker(this.marker).then(function (marker) {
            _this.onMarkerLoaded.next(marker);
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], OnMarkerLoaded.prototype, "onMarkerLoaded", void 0);
    OnMarkerLoaded = __decorate([
        core_1.Directive({
            selector: '[onMarkerLoaded]'
        }), 
        __metadata('design:paramtypes', [core_2.MarkerManager, core_2.SebmGoogleMapMarker])
    ], OnMarkerLoaded);
    return OnMarkerLoaded;
}());
exports.OnMarkerLoaded = OnMarkerLoaded;
//# sourceMappingURL=on-marker-loaded.directive.js.map