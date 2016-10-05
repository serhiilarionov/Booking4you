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
var GmapRichMarkerComponent = (function () {
    function GmapRichMarkerComponent(googleMapsAPIWrapper, markerManager, marker, elementRef) {
        this.googleMapsAPIWrapper = googleMapsAPIWrapper;
        this.markerManager = markerManager;
        this.marker = marker;
        this.elementRef = elementRef;
        this.onRichMarkerCreated = new core_1.EventEmitter();
        this.options = {
            content: this.elementRef.nativeElement,
            draggable: false,
            flat: true
        };
    }
    GmapRichMarkerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.googleMapsAPIWrapper.getNativeMap().then(function (map) {
            _this.options.map = map;
            System.import('rich-marker').then(function () {
                _this.markerManager.getNativeMarker(_this.marker).then(function (marker) {
                    _this.nativeMarker = marker;
                    _this.options.position = _this.nativeMarker['position'];
                    _this.onRichMarkerCreated.next(new RichMarker(_this.options));
                });
            });
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GmapRichMarkerComponent.prototype, "onRichMarkerCreated", void 0);
    GmapRichMarkerComponent = __decorate([
        core_1.Component({
            selector: 'gmap-rich-marker',
            templateUrl: 'scripts/components/gmap/components/gmap-rich-marker.component.html',
            styleUrls: ['scripts/components/gmap/components/gmap-rich-marker.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [core_2.GoogleMapsAPIWrapper, core_2.MarkerManager, core_2.SebmGoogleMapMarker, core_1.ElementRef])
    ], GmapRichMarkerComponent);
    return GmapRichMarkerComponent;
}());
exports.GmapRichMarkerComponent = GmapRichMarkerComponent;
//# sourceMappingURL=gmap-rich-marker.component.js.map