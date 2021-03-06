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
var index_1 = require('./shared/index');
var index_2 = require('./shared/index');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var AppComponent = (function () {
    function AppComponent(sidebar, el, router, translate) {
        var _this = this;
        this.sidebar = sidebar;
        this.el = el;
        this.router = router;
        this.translate = translate;
        this.translate.setDefaultLang('ru');
        this.translate.use('ru');
        this.$el = $(el.nativeElement);
        index_2.LoopBackConfig.setBaseURL(index_2.BASE_URL + ":" + index_2.API_PORT);
        index_2.LoopBackConfig.setApiVersion(index_2.API_VERSION);
        this.sidebar.toggled$.subscribe(function () {
            _this.$el.toggleClass('sidebar-opened');
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd && _this.sidebar.opened) {
                _this.sidebar.toggle();
            }
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'scripts/app.component.html',
            styleUrls: ['scripts/app.component.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [index_1.SidebarService, core_1.ElementRef, router_1.Router, ng2_translate_1.TranslateService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map