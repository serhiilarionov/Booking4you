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
var index_1 = require('../../shared/index');
var MENU_TREE = [
    {
        name: 'Home page',
        link: ''
    },
    {
        name: 'Company list',
        link: 'company-list'
    }
];
var SidebarComponent = (function () {
    function SidebarComponent(sidebar, el) {
        var _this = this;
        this.sidebar = sidebar;
        this.el = el;
        this.menuTree = MENU_TREE;
        this.$el = $(el.nativeElement);
        sidebar.toggled$.subscribe(function () { return _this.toggle(); });
    }
    SidebarComponent.prototype.toggle = function () {
        this.$el.toggleClass('active');
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar',
            styleUrls: ['scripts/parts/sidebar/sidebar.component.css'],
            templateUrl: 'scripts/parts/sidebar/sidebar.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [index_1.SidebarService, core_1.ElementRef])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map