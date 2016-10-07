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
var index_1 = require('../../../shared/index');
var forms_1 = require('@angular/forms');
var BookingFormComponent = (function () {
    function BookingFormComponent(companyApi, formBuilder, authService, clientApi, coreApi) {
        var _this = this;
        this.companyApi = companyApi;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.clientApi = clientApi;
        this.coreApi = coreApi;
        this.servicesSelected = [];
        this.currentUser = this.clientApi.getCachedCurrent();
        this.authService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.bookingForm = this.formBuilder.group({
            bookingDate: ['', forms_1.Validators.required],
            bookingTime: ['', forms_1.Validators.required],
            bookingService: ''
        });
    }
    BookingFormComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.companyApi.getService(this.company.id).subscribe(function (services) {
            _this.services = services;
        });
        this.submitSuccessfull = '';
    };
    BookingFormComponent.prototype.onCheck = function (event, val) {
        if (event.target.checked === true) {
            this.servicesSelected.push(val);
        }
        else {
            var index = this.servicesSelected.indexOf(val);
            this.servicesSelected.splice(index, 1);
        }
    };
    BookingFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var dateTime = this.bookingForm.value.bookingDate + " " + this.bookingForm.value.bookingTime;
        this.coreApi.createBooking(this.company.id, dateTime, this.servicesSelected)
            .subscribe(function (success) { _this.submitSuccessfull = 'success'; }, function (error) { _this.submitSuccessfull = 'fail'; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Company)
    ], BookingFormComponent.prototype, "company", void 0);
    BookingFormComponent = __decorate([
        core_1.Component({
            selector: 'booking-form',
            templateUrl: 'scripts/components/booking/form/booking-form.component.html',
            styleUrls: ['scripts/components/booking/form/booking-form.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [index_1.CompanyApi, forms_1.FormBuilder, index_1.AuthService, index_1.ClientApi, index_1.CoreApi])
    ], BookingFormComponent);
    return BookingFormComponent;
}());
exports.BookingFormComponent = BookingFormComponent;
//# sourceMappingURL=booking-form.component.js.map