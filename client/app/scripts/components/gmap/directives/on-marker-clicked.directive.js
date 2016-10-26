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
var OnMarkerClicked = (function () {
    function OnMarkerClicked(markerManager, marker) {
        this.markerManager = markerManager;
        this.marker = marker;
        this.enableInfoBox = false;
        this.onMarkerClicked = new core_1.EventEmitter();
    }
    OnMarkerClicked.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.enableInfoBox) {
            return;
        }
        this.markerManager.createEventObservable('click', this.marker).subscribe(function () {
            _this.markerManager.getNativeMarker(_this.marker).then(function (marker) {
                _this.onMarkerClicked.next(marker);
            });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], OnMarkerClicked.prototype, "enableInfoBox", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], OnMarkerClicked.prototype, "onMarkerClicked", void 0);
    OnMarkerClicked = __decorate([
        core_1.Directive({
            selector: '[onMarkerClicked]'
        }), 
        __metadata('design:paramtypes', [core_2.MarkerManager, core_2.SebmGoogleMapMarker])
    ], OnMarkerClicked);
    return OnMarkerClicked;
}());
exports.OnMarkerClicked = OnMarkerClicked;
//# sourceMappingURL=on-marker-clicked.directive.js.map