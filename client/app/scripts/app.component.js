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
var header_component_1 = require('./parts/header/header.component');
var footer_component_1 = require('./parts/footer/footer.component');
var sidebar_component_1 = require('./parts/sidebar/sidebar.component');
var sidebar_service_1 = require('./parts/sidebar/sidebar.service');
var AppComponent = (function () {
    function AppComponent(sidebar, el) {
        this.sidebar = sidebar;
        this.el = el;
        this.$el = $(el.nativeElement);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidebar.toggled$.subscribe(function () { return _this.$el.toggleClass('sidebar-opened'); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'scripts/app.component.html',
            styleUrls: ['scripts/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent, sidebar_component_1.SidebarComponent],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [sidebar_service_1.SidebarService]
        }), 
        __metadata('design:paramtypes', [sidebar_service_1.SidebarService, core_1.ElementRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map