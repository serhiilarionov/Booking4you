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
var GmapMarkerClusterer = (function () {
    function GmapMarkerClusterer() {
    }
    GmapMarkerClusterer.prototype.ngOnInit = function () {
        var _this = this;
        this.mapObservable.subscribe(function (map) {
            _this.markersObservable.subscribe(function (markers) {
                if (!_this.markerClusterer) {
                    _this.createClusterer(map, markers);
                    return;
                }
                _this.markerClusterer.clearMarkers();
                _this.markerClusterer.addMarkers(markers);
            });
        });
    };
    GmapMarkerClusterer.prototype.createClusterer = function (map, markers) {
        this.markerClusterer = new MarkerClusterer(map, markers, {
            imagePath: '/vendor/js-marker-clusterer/images/m'
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GmapMarkerClusterer.prototype, "mapObservable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GmapMarkerClusterer.prototype, "markersObservable", void 0);
    GmapMarkerClusterer = __decorate([
        core_1.Directive({
            selector: 'gmap-marker-clusterer'
        }), 
        __metadata('design:paramtypes', [])
    ], GmapMarkerClusterer);
    return GmapMarkerClusterer;
}());
exports.GmapMarkerClusterer = GmapMarkerClusterer;
//# sourceMappingURL=gmap-marker-clusterer.js.map