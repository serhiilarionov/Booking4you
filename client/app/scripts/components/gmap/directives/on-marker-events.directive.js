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
var OnMarkerEvents = (function () {
    function OnMarkerEvents(markerManager, sebmGoogleMapMarker) {
        this.markerManager = markerManager;
        this.sebmGoogleMapMarker = sebmGoogleMapMarker;
        this.enableInfoBox = false;
        this.enableClusterer = false;
        this.onMarkerClicked = new core_1.EventEmitter();
    }
    OnMarkerEvents.prototype.ngOnInit = function () {
        var _this = this;
        this.markerManager.getNativeMarker(this.sebmGoogleMapMarker).then(function (marker) {
            _this.marker = marker;
            if (_this.enableClusterer) {
                _this.markerClusterer.addMarker(_this.marker);
            }
            // create click event listener only if infobox is enabled
            if (_this.enableInfoBox) {
                _this.markerManager.createEventObservable('click', _this.sebmGoogleMapMarker).subscribe(function () {
                    _this.onMarkerClicked.next(_this.marker);
                });
            }
        });
    };
    OnMarkerEvents.prototype.ngOnDestroy = function () {
        if (this.enableClusterer) {
            this.markerClusterer.removeMarker(this.marker);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OnMarkerEvents.prototype, "markerClusterer", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], OnMarkerEvents.prototype, "enableInfoBox", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], OnMarkerEvents.prototype, "enableClusterer", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], OnMarkerEvents.prototype, "onMarkerClicked", void 0);
    OnMarkerEvents = __decorate([
        core_1.Directive({
            selector: '[onMarkerEvents]'
        }), 
        __metadata('design:paramtypes', [core_2.MarkerManager, core_2.SebmGoogleMapMarker])
    ], OnMarkerEvents);
    return OnMarkerEvents;
}());
exports.OnMarkerEvents = OnMarkerEvents;
//# sourceMappingURL=on-marker-events.directive.js.map