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
var router_1 = require('@angular/router');
var index_1 = require('../../shared/index');
var styles_1 = require('./styles');
var GmapComponent = (function () {
    function GmapComponent(cityApi, route) {
        this.cityApi = cityApi;
        this.route = route;
        this.markerIconUrl = 'scripts/components/gmap/images/spotlight-poi.png';
        this.activeCompanyList = [];
        this.richMarkers = [];
        this.companyIds = [];
        this.markersToAdd = [];
        this.markersToRemove = [];
        this.styles = styles_1.styles;
        this.bounds = { east: 38, north: 50, south: 46, west: 24 };
        this.markerClicked = new core_1.EventEmitter();
        this.enableClusterer = false;
        this.enableInfoBox = false;
        this.boundsChanged = new core_1.EventEmitter();
    }
    GmapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if ('cityId' in params) {
                _this.cityApi.findById(params['cityId']).subscribe(function (city) {
                    var res = city.bound.split(', ');
                    _this.bounds = {
                        west: parseFloat(res[0]),
                        north: parseFloat(res[1]),
                        east: parseFloat(res[2]),
                        south: parseFloat(res[3])
                    };
                });
            }
        });
    };
    GmapComponent.prototype.ngOnChanges = function (changes) {
        if ('companyList' in changes) {
            this.updateMarkers();
        }
    };
    GmapComponent.prototype.onMarkerClustererLoaded = function (markerClusterer) {
        this.markerClusterer = markerClusterer;
    };
    GmapComponent.prototype.onRichMarkerCreated = function (richMarker) {
        this.richMarkers.push(richMarker);
    };
    GmapComponent.prototype.onMarkerClicked = function (companyMarker) {
        this.markerClicked.next(companyMarker);
    };
    GmapComponent.prototype.onInfoBoxCreated = function (infoBox) {
        this.infoBox = infoBox;
    };
    GmapComponent.prototype.onMapLoaded = function (googleMapsAPIWrapper) {
        this.googleMapsAPIWrapper = googleMapsAPIWrapper;
        this.googleMapsAPIWrapper.getNativeMap().then(function (map) {
            map.setOptions(Object.create({ minZoom: 8 }));
        });
    };
    GmapComponent.prototype.onZoomChanged = function () {
        if (this.infoBox) {
            this.infoBox.setVisible(false);
        }
    };
    GmapComponent.prototype.idle = function () {
        var _this = this;
        if (!this.googleMapsAPIWrapper) {
            return;
        }
        this.googleMapsAPIWrapper.getBounds().then(function (bounds) {
            _this.boundsChanged.next(bounds);
        });
    };
    GmapComponent.prototype.updateMarkers = function () {
        var _this = this;
        var newCompanyListIds = [];
        // check for new companies
        this.companyList.forEach(function (company) {
            newCompanyListIds.push(company.id);
            if (_this.companyIds.indexOf(company.id) === -1) {
                _this.activeCompanyList.push(company);
                _this.companyIds.push(company.id);
            }
        });
        // check for companies that should be removed
        this.companyIds.forEach(function (id, indexOfCompany) {
            if (newCompanyListIds.indexOf(id) === -1) {
                _this.companyIds.splice(indexOfCompany, 1);
                var companyToRemove_1 = _this.activeCompanyList.splice(indexOfCompany, 1)[0];
                var indexOfRichMarker_1;
                _this.richMarkers.forEach(function (richMarker, index) {
                    if (Number((richMarker.getPosition().lat() / companyToRemove_1.point.lat).toFixed(5)) === 1 &&
                        Number((richMarker.getPosition().lng() / companyToRemove_1.point.lng).toFixed(5)) === 1) {
                        indexOfRichMarker_1 = index;
                        richMarker.onRemove();
                    }
                });
                _this.richMarkers.splice(indexOfRichMarker_1, 1);
            }
        });
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
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], GmapComponent.prototype, "boundsChanged", void 0);
    GmapComponent = __decorate([
        core_1.Component({
            selector: 'gmap',
            templateUrl: 'scripts/components/gmap/gmap.component.html',
            styleUrls: ['scripts/components/gmap/gmap.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [index_1.CityApi, router_1.ActivatedRoute])
    ], GmapComponent);
    return GmapComponent;
}());
exports.GmapComponent = GmapComponent;
//# sourceMappingURL=gmap.component.js.map