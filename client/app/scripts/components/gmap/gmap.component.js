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
var styles_1 = require('./styles');
var GmapComponent = (function () {
    function GmapComponent() {
        this.markerIconUrl = 'scripts/components/gmap/images/spotlight-poi.png';
        this.richMarkers = [];
        this.nativeMarkers = [];
        this.markersObservable = new core_1.EventEmitter();
        this.markerClicked = new core_1.EventEmitter();
        this.zoomChange = new core_1.EventEmitter();
        this.styles = styles_1.styles;
        this.bounds = { east: 38, north: 50, south: 46, west: 24 };
        this.enableClusterer = false;
        this.enableInfoBox = false;
    }
    GmapComponent.prototype.ngOnChanges = function (changes) {
        if ('companyList' in changes && changes['companyList'].currentValue) {
            if (!this.companyList.length) {
                // hide infobox when new companyList
                if (this.infoBox) {
                    this.infoBox.setVisible(false);
                }
                // reset markers input for gmap-marker-clusterer component if company list is empty
                this.richMarkers.forEach(function (marker) {
                    marker.onRemove();
                });
                this.richMarkers = [];
                this.nativeMarkers = [];
            }
            else {
                this.calculateBounds();
            }
        }
    };
    GmapComponent.prototype.onMarkerLoaded = function (marker) {
        this.nativeMarkers.push(marker);
        this.markersObservable.next(this.nativeMarkers);
    };
    GmapComponent.prototype.onMarkerClicked = function (companyMarker) {
        this.markerClicked.next(companyMarker);
    };
    GmapComponent.prototype.onRichMarkerCreated = function (marker) {
        this.richMarkers.push(marker);
    };
    GmapComponent.prototype.onInfoBoxCreated = function (infoBox) {
        this.infoBox = infoBox;
    };
    GmapComponent.prototype.calculateBounds = function () {
        var lats = this.companyList.map(function (company) { return company.point.lat; });
        var lngs = this.companyList.map(function (company) { return company.point.lng; });
        var east = Math.max.apply(null, lngs);
        var north = Math.max.apply(null, lats);
        var south = Math.min.apply(null, lats);
        var west = Math.min.apply(null, lngs);
        this.bounds = { east: east, north: north, south: south, west: west };
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], GmapComponent.prototype, "companyList", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], GmapComponent.prototype, "enableClusterer", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], GmapComponent.prototype, "enableInfoBox", void 0);
    GmapComponent = __decorate([
        core_1.Component({
            selector: 'gmap',
            templateUrl: 'scripts/components/gmap/gmap.component.html',
            styleUrls: ['scripts/components/gmap/gmap.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], GmapComponent);
    return GmapComponent;
}());
exports.GmapComponent = GmapComponent;
//# sourceMappingURL=gmap.component.js.map