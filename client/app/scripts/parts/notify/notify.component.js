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
var UserNotify = (function () {
    function UserNotify(notifySocket) {
        var _this = this;
        this.notifySocket = notifySocket;
        this.messageList = [];
        this.notifySocket.response.subscribe(function (data) {
            _this.messageList.push({ message: data, state: 'in' });
        });
    }
    ;
    UserNotify.prototype.hideNotice = function (notice) {
        notice.state = 'hidden';
    };
    UserNotify = __decorate([
        core_1.Component({
            selector: 'user-notify',
            templateUrl: 'scripts/parts/notify/notify.component.html',
            styleUrls: ['scripts/parts/notify/notify.component.css'],
            animations: [
                core_1.trigger('messageInOut', [
                    core_1.state('hidden', core_1.style({ transform: 'translateX(100%)', display: 'none' })),
                    core_1.transition('* => hidden', [
                        core_1.animate('200ms ease-out')
                    ]),
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateX(100%)' }),
                        core_1.animate('200ms ease-in')
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [index_1.SocketService])
    ], UserNotify);
    return UserNotify;
}());
exports.UserNotify = UserNotify;
//# sourceMappingURL=notify.component.js.map