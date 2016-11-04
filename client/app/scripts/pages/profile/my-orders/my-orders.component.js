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
var ProfileMyOrdersComponent = (function () {
    function ProfileMyOrdersComponent(clientApi, bookingApi) {
        var _this = this;
        this.clientApi = clientApi;
        this.bookingApi = bookingApi;
        this.currentUser = this.clientApi.getCachedCurrent();
        this.clientApi.getBookings(this.currentUser.id, { order: 'createdAt DESC', include: { company: ['details'] } })
            .subscribe(function (bookings) {
            _this.bookingsList = bookings.map(function (instance) {
                _this.bookingApi.getServices(instance.id).subscribe(function (services) {
                    services.length ? instance.services = services : false;
                });
                return instance;
            });
        });
    }
    ProfileMyOrdersComponent = __decorate([
        core_1.Component({
            selector: 'my-orders',
            templateUrl: 'scripts/pages/profile/my-orders/my-orders.component.html',
            styleUrls: ['scripts/pages/profile/my-orders/my-orders.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.ClientApi, index_1.BookingApi])
    ], ProfileMyOrdersComponent);
    return ProfileMyOrdersComponent;
}());
exports.ProfileMyOrdersComponent = ProfileMyOrdersComponent;
// TODO: fix td "booked in" view on md devices
// TODO: 'nothing found' if no bookings
//# sourceMappingURL=my-orders.component.js.map