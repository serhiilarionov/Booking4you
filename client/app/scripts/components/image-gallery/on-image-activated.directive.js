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
var OnImageActivatedDirective = (function () {
    function OnImageActivatedDirective(elementRef) {
        this.elementRef = elementRef;
        this.onImageActivated = new core_1.EventEmitter();
    }
    OnImageActivatedDirective.prototype.ngOnChanges = function (changes) {
        if ('state' in changes && changes['state'].currentValue === 'active') {
            this.onImageActivated.next(this.height);
        }
    };
    OnImageActivatedDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.elementRef.nativeElement.addEventListener('load', function () {
            _this.height = $(_this.elementRef.nativeElement).height();
            if (_this.state === 'active') {
                _this.onImageActivated.next(_this.height);
            }
        });
    };
    __decorate([
        core_1.Input('state'), 
        __metadata('design:type', String)
    ], OnImageActivatedDirective.prototype, "state", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], OnImageActivatedDirective.prototype, "onImageActivated", void 0);
    OnImageActivatedDirective = __decorate([
        core_1.Directive({
            selector: '[onImageActivated]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OnImageActivatedDirective);
    return OnImageActivatedDirective;
}());
exports.OnImageActivatedDirective = OnImageActivatedDirective;
//# sourceMappingURL=on-image-activated.directive.js.map