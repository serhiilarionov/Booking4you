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
var GmapComponent = (function () {
    function GmapComponent() {
        this.lat = 30;
        this.lng = 40;
    }
    GmapComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { console.log('GMAOP', _this.companyList); }, 6000);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], GmapComponent.prototype, "companyList", void 0);
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