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
// TODO: open company modal on quick view
var GmapInfoBoxComponent = (function () {
    function GmapInfoBoxComponent(googleMapsAPIWrapper, elementRef) {
        this.googleMapsAPIWrapper = googleMapsAPIWrapper;
        this.elementRef = elementRef;
        this.onInfoBoxCreated = new core_1.EventEmitter();
    }
    GmapInfoBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.googleMapsAPIWrapper.getNativeMap().then(function (map) {
            _this.map = map;
            var options = {
                alignBottom: true,
                content: _this.elementRef.nativeElement,
                maxWidth: 295,
                boxClass: 'gmap-info-box__wrapper',
                closeBoxMargin: '0 0 -30px 0',
                closeBoxURL: 'scripts/components/gmap/images/close.png',
                pixelOffset: new google.maps.Size(-18, -42),
                infoBoxClearance: new google.maps.Size(10, 10)
            };
            System.import('info-box').then(function () {
                _this.infoBox = new InfoBox(options);
                _this.onInfoBoxCreated.next(_this.infoBox);
            });
        });
        this.markerClicked.subscribe(function (companyMarker) {
            if (!_this.infoBox) {
                return;
            }
            Object.assign(_this, companyMarker);
            _this.infoBox.setVisible(true);
            _this.infoBox.open(_this.map, _this.marker);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GmapInfoBoxComponent.prototype, "markerClicked", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GmapInfoBoxComponent.prototype, "onInfoBoxCreated", void 0);
    GmapInfoBoxComponent = __decorate([
        core_1.Component({
            selector: 'gmap-info-box',
            templateUrl: 'scripts/components/gmap/components/gmap-info-box.component.html',
            styleUrls: ['scripts/components/gmap/components/gmap-info-box.components.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [core_2.GoogleMapsAPIWrapper, core_1.ElementRef])
    ], GmapInfoBoxComponent);
    return GmapInfoBoxComponent;
}());
exports.GmapInfoBoxComponent = GmapInfoBoxComponent;
//# sourceMappingURL=gmap-info-box.component.js.map