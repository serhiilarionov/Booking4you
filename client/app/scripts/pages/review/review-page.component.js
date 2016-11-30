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
var router_1 = require('@angular/router');
var ReviewPageComponent = (function () {
    function ReviewPageComponent(bookingApi, activatedRoute, clientApi) {
        var _this = this;
        this.bookingApi = bookingApi;
        this.activatedRoute = activatedRoute;
        this.clientApi = clientApi;
        this.allowed = false;
        this.bookingId = this.activatedRoute.snapshot.params['bookingId'];
        this.currentUser = this.clientApi.getCachedCurrent();
        this.bookingApi.findById(this.bookingId, { include: { company: ['details'] } }).subscribe(function (booking) {
            _this.booking = booking;
            if (_this.booking.clientId === _this.currentUser.id && !_this.booking.commented && _this.booking.status === 'done') {
                _this.allowed = true;
            }
            _this.photoUrl = _this.booking.company.photo ?
                index_1.BASE_URL + "/storage/test/" + _this.booking.company.cityId + "/" + _this.booking.company.categoryId + "/" + _this.booking.company.id + "/" + _this.booking.company.photo :
                'http://placehold.it/220?text=no+photo';
        });
    }
    ReviewPageComponent = __decorate([
        core_1.Component({
            selector: 'review-page',
            templateUrl: 'scripts/pages/review/review-page.component.html',
            styleUrls: ['scripts/pages/review/review-page.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.BookingApi, router_1.ActivatedRoute, index_1.ClientApi])
    ], ReviewPageComponent);
    return ReviewPageComponent;
}());
exports.ReviewPageComponent = ReviewPageComponent;
//# sourceMappingURL=review-page.component.js.map