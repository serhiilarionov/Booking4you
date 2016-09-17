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
var index_1 = require('../../shared/services/index');
var GmapInfoboxComponent = (function () {
    function GmapInfoboxComponent(elementRef, wrapper, marker, markerMgr, InfoboxLoader) {
        this.elementRef = elementRef;
        this.wrapper = wrapper;
        this.marker = marker;
        this.markerMgr = markerMgr;
        this.InfoboxLoader = InfoboxLoader;
    }
    GmapInfoboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.InfoboxLoader.load().then(function (infobox) {
            _this.InfoBox = infobox;
            _this.wrapper.getNativeMap()
                .then(function (map) {
                _this.nativeMap = map;
                _this.markerMgr.getNativeMarker(_this.marker)
                    .then(function (marker) {
                    _this.nativeMarker = marker;
                    _this.box = new _this.InfoBox({ content: _this.elementRef.nativeElement });
                    _this.box.open(_this.nativeMap, _this.nativeMarker);
                });
            });
        });
        // System.import('//rawgit.com/googlemaps/v3-utility-library/master/infobox/src/infobox.js')
        //   .then((infobox) => { this.InfoBox = infobox; this.wrapper.getNativeMap()
        //     .then((map) => { this.nativeMap = map; this.markerMgr.getNativeMarker(this.marker)
        //       .then((marker) => {
        //         this.nativeMarker = marker;
        //         this.box = new InfoBox({content: this.elementRef.nativeElement});
        //         this.box.open(this.nativeMap, this.nativeMarker);
        //     });
        //   }); });
    };
    GmapInfoboxComponent = __decorate([
        core_1.Component({
            selector: 'gmap-infobox',
            template: "<div>Here is the infobox</div>"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_2.GoogleMapsAPIWrapper, core_2.SebmGoogleMapMarker, core_2.MarkerManager, index_1.InfoboxLoader])
    ], GmapInfoboxComponent);
    return GmapInfoboxComponent;
}());
exports.GmapInfoboxComponent = GmapInfoboxComponent;
//# sourceMappingURL=gmap-infobox.component.js.map