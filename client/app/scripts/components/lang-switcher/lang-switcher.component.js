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
var storage_driver_1 = require('../../shared/sdk/storage/storage.driver');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var langList = [{
        id: 'en',
        name: 'English'
    }, {
        id: 'ru',
        name: 'Русский'
    }, {
        id: 'ua',
        name: 'Українська'
    }];
var LangSwitcherComponent = (function () {
    function LangSwitcherComponent(translate) {
        this.translate = translate;
        this.langList = langList;
    }
    LangSwitcherComponent.prototype.ngOnInit = function () {
        this.selected = storage_driver_1.StorageDriver.get('currentLang') ? storage_driver_1.StorageDriver.get('currentLang') : this.translate.currentLang;
        this.translate.use(this.selected);
    };
    LangSwitcherComponent.prototype.onSelected = function (value) {
        this.translate.use(value);
        storage_driver_1.StorageDriver.set('currentLang', value);
    };
    LangSwitcherComponent = __decorate([
        core_1.Component({
            selector: 'lang-switcher',
            templateUrl: 'scripts/components/lang-switcher/lang-switcher.component.html',
            styleUrls: ['scripts/components/lang-switcher/lang-switcher.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService])
    ], LangSwitcherComponent);
    return LangSwitcherComponent;
}());
exports.LangSwitcherComponent = LangSwitcherComponent;
//# sourceMappingURL=lang-switcher.component.js.map