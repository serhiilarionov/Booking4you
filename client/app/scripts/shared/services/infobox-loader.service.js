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
var InfoboxLoader = (function () {
    function InfoboxLoader() {
    }
    InfoboxLoader.prototype.load = function () {
        if (this.scriptLoadingPromise) {
            return this.scriptLoadingPromise;
        }
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = '//rawgit.com/googlemaps/v3-utility-library/master/infobox/src/infobox.js';
        this.scriptLoadingPromise = new Promise(function (resolve, reject) {
            script.onload = function () {
                resolve(window['InfoBox']);
            };
            script.onerror = function (error) { reject(error); };
        });
        document.body.appendChild(script);
        return this.scriptLoadingPromise;
    };
    InfoboxLoader = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], InfoboxLoader);
    return InfoboxLoader;
}());
exports.InfoboxLoader = InfoboxLoader;
//# sourceMappingURL=infobox-loader.service.js.map