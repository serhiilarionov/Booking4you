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
var Dropdown = (function () {
    function Dropdown(el) {
        this.el = el;
        this.onSelected = new core_1.EventEmitter();
        this.$el = $(this.el.nativeElement);
    }
    Dropdown.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.$el.selectpicker();
        this.$el.on('changed.bs.select', function () {
            _this.onSelected.next(_this.$el.selectpicker('val'));
        });
    };
    Dropdown.prototype.ngAfterViewChecked = function () {
        this.$el.selectpicker('refresh');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Dropdown.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Dropdown.prototype, "selected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Dropdown.prototype, "onSelected", void 0);
    Dropdown = __decorate([
        core_1.Component({
            selector: 'select.selectpicker',
            templateUrl: 'scripts/shared/directives/dropdown.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Dropdown);
    return Dropdown;
}());
exports.Dropdown = Dropdown;
//# sourceMappingURL=dropdown.js.map