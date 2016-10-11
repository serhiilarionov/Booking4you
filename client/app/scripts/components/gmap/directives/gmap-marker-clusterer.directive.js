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
var GmapMarkerClusterer = (function () {
    function GmapMarkerClusterer(googleMapsAPIWrapper) {
        this.googleMapsAPIWrapper = googleMapsAPIWrapper;
        this.markerClustererLoaded = new core_1.EventEmitter();
    }
    GmapMarkerClusterer.prototype.ngOnInit = function () {
        var _this = this;
        this.googleMapsAPIWrapper.getNativeMap().then(function (map) {
            _this.createClusterer(map, []);
        });
    };
    GmapMarkerClusterer.prototype.createClusterer = function (map, markers) {
        this.markerClusterer = new MarkerClusterer(map, markers, {
            styles: [{
                    url: '/scripts/components/gmap/images/m1.png',
                    height: 52,
                    width: 53,
                    textColor: '#ffffff',
                    textSize: 11
                }, {
                    url: '/scripts/components/gmap/images/m2.png',
                    height: 55,
                    width: 56,
                    textColor: '#ffffff',
                    textSize: 11
                }, {
                    url: '/scripts/components/gmap/images/m3.png',
                    height: 65,
                    width: 66,
                    textColor: '#ffffff',
                    textSize: 11
                }, {
                    url: '/scripts/components/gmap/images/m4.png',
                    height: 77,
                    width: 78,
                    textColor: '#ffffff',
                    textSize: 11
                }, {
                    url: '/scripts/components/gmap/images/m5.png',
                    height: 89,
                    width: 90,
                    textColor: '#ffffff',
                    textSize: 11
                }]
        });
        this.markerClustererLoaded.next(this.markerClusterer);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GmapMarkerClusterer.prototype, "markerClustererLoaded", void 0);
    GmapMarkerClusterer = __decorate([
        core_1.Directive({
            selector: 'gmap-marker-clusterer'
        }), 
        __metadata('design:paramtypes', [core_2.GoogleMapsAPIWrapper])
    ], GmapMarkerClusterer);
    return GmapMarkerClusterer;
}());
exports.GmapMarkerClusterer = GmapMarkerClusterer;
//# sourceMappingURL=gmap-marker-clusterer.directive.js.map