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
var forms_1 = require('@angular/forms');
var RatingComponent = (function () {
    function RatingComponent() {
        this.max = 5;
        this.disable = false;
        this.ratingRanges = [];
    }
    RatingComponent.prototype.writeValue = function (value) {
        this.model = value;
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RatingComponent.prototype.validate = function (c) {
        if (this.required && !c.value) {
            return {
                required: true
            };
        }
        return null;
    };
    RatingComponent.prototype.ngOnInit = function () {
        this.show ? this.showRating(this.show) : this.buildRanges(this.max);
    };
    RatingComponent.prototype.setHovered = function (star) {
        if (this.show || this.disable) {
            return;
        }
        this.ratingRanges = this.ratingRanges.map(function (instance) {
            (instance['value'] <= star) ? instance['fill'] = true : instance['fill'] = false;
            return instance;
        });
    };
    RatingComponent.prototype.clearHovered = function () {
        if (this.model > 0 || this.show) {
            this.setHovered(this.model);
            return;
        }
        this.ratingRanges = this.ratingRanges.map(function (instance) {
            instance['fill'] = false;
            return instance;
        });
    };
    RatingComponent.prototype.setRating = function (value) {
        if (this.show || this.disable) {
            return;
        }
        this.setHovered(value);
        this.model = value;
        this.onChange(value);
    };
    RatingComponent.prototype.showRating = function (value) {
        var integer;
        var float = 0;
        if (value % 1 !== 0) {
            var floated = value.toFixed(2).toString().split('.');
            integer = parseInt(floated[0], 10) + 1;
            float = parseInt(floated[1], 10);
        }
        else {
            integer = value;
        }
        (this.max < integer) ? this.buildRanges(integer) : this.buildRanges(this.max);
        this.ratingRanges = this.ratingRanges.map(function (instance) {
            if ((instance['value'] === integer) && float) {
                instance['floatClass'] = "fill_" + float;
            }
            if (instance['value'] <= integer) {
                instance['fill'] = true;
            }
            return instance;
        });
    };
    RatingComponent.prototype.buildRanges = function (range) {
        this.ratingRanges = this.buildRangeArray(1, range);
    };
    RatingComponent.prototype.buildRangeArray = function (start, end) {
        var arr = [];
        for (var i = start; i <= end; i++) {
            arr.push({ value: i, fill: false, floatClass: '' });
        }
        return arr;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RatingComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], RatingComponent.prototype, "required", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RatingComponent.prototype, "show", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], RatingComponent.prototype, "disable", void 0);
    RatingComponent = __decorate([
        core_1.Component({
            selector: 'star-rating',
            templateUrl: 'scripts/components/rating/rating.component.html',
            styleUrls: ['scripts/components/rating/rating.component.css'],
            providers: [
                { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return RatingComponent; }), multi: true },
                { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return RatingComponent; }), multi: true }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map