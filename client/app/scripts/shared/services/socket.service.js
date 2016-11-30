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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var index_1 = require('../index');
var io = require('socket.io-client');
var SocketService = (function () {
    function SocketService(loopBackAuth, clientApi, auth) {
        var _this = this;
        this.loopBackAuth = loopBackAuth;
        this.clientApi = clientApi;
        this.auth = auth;
        this.response = new core_1.EventEmitter();
        this.clientApi.isAuthenticated() ? this.createSocket() :
            this.auth.currentUser.subscribe(function (data) {
                (data && data !== null) ? _this.createSocket() : _this.socket.close();
            });
    }
    SocketService.prototype.createSocket = function () {
        var _this = this;
        this.accessToken = this.loopBackAuth.getToken();
        this.socket = io.connect(index_1.BASE_URL);
        this.socket.emit('authentication', this.accessToken);
        this.socket.on('authenticated', function () {
            _this.socket.on("/notify/" + _this.accessToken.userId, function (data) {
                _this.response.next(data);
            });
        });
        this.socket.on('unauthorized', function (err) {
            console.log('Socket::', err.message);
        });
    };
    SocketService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return index_1.LoopBackAuth; }))),
        __param(1, core_1.Inject(core_1.forwardRef(function () { return index_1.ClientApi; }))),
        __param(2, core_1.Inject(core_1.forwardRef(function () { return index_1.AuthService; }))), 
        __metadata('design:paramtypes', [index_1.LoopBackAuth, index_1.ClientApi, index_1.AuthService])
    ], SocketService);
    return SocketService;
}());
exports.SocketService = SocketService;
//# sourceMappingURL=socket.service.js.map