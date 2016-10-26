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
require('moment');
require('moment/locale/ru');
var DateTimePickerDirective = (function () {
    function DateTimePickerDirective(elementRef) {
        this.elementRef = elementRef;
        this.tooltipsRU = {
            today: 'Сегодня',
            clear: 'Очистить',
            close: 'Закрыть',
            selectMonth: 'Выбрать месяц',
            prevMonth: 'Предыдущий месяц',
            nextMonth: 'Следующий месяц',
            selectYear: 'Выбрать год',
            prevYear: 'Предыдущий год',
            nextYear: 'Следующий год',
            selectDecade: 'Выбрать десятилетие',
            prevDecade: 'Предыдущее десятилетие',
            nextDecade: 'Следующее десятилетие',
            prevCentury: 'Предыдщее столетие',
            nextCentury: 'Следующее столетие'
        };
    }
    DateTimePickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.dateTimePickerOptions) {
            this.dateTimePickerOptions = {
                format: 'YYYY-MM-DD',
                locale: 'ru',
                stepping: 5,
                showTodayButton: true,
                showClear: true,
                showClose: true,
                minDate: index_1.TODAY_DATE.setHours(0, 0, 0)
            };
        }
        if (this.dateTimePickerOptions.locale.toLocaleLowerCase() === 'ru') {
            this.dateTimePickerOptions.tooltips = this.tooltipsRU;
        }
        System.import('bootstrap-datetimepicker').then(function () {
            $(_this.elementRef.nativeElement).datetimepicker(_this.dateTimePickerOptions);
        });
    };
    __decorate([
        core_1.Input('datetimepicker'), 
        __metadata('design:type', Object)
    ], DateTimePickerDirective.prototype, "dateTimePickerOptions", void 0);
    DateTimePickerDirective = __decorate([
        core_1.Directive({
            selector: '[datetimepicker]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DateTimePickerDirective);
    return DateTimePickerDirective;
}());
exports.DateTimePickerDirective = DateTimePickerDirective;
//# sourceMappingURL=datetimepicker.js.map