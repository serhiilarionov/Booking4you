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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var header_component_1 = require('./parts/header/header.component');
var footer_component_1 = require('./parts/footer/footer.component');
var sidebar_component_1 = require('./parts/sidebar/sidebar.component');
var app_routing_1 = require('./app.routing');
var sidebar_service_1 = require('./parts/sidebar/sidebar.service');
var constants_1 = require('./common/services/constants');
var Pages = require('./pages');
var Directives = require('./common/directives');
var declarations = [app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, sidebar_component_1.SidebarComponent];
for (var key in Pages) {
    declarations.push(Pages[key]);
}
for (var key in Directives) {
    declarations.push(Directives[key]);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                forms_1.ReactiveFormsModule
            ],
            declarations: declarations,
            bootstrap: [app_component_1.AppComponent],
            providers: [
                sidebar_service_1.SidebarService,
                constants_1.Constants
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map