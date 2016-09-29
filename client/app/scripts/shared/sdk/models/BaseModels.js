/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AccessToken = (function () {
    function AccessToken(instance) {
        Object.assign(this, instance);
    }
    return AccessToken;
}());
exports.AccessToken = AccessToken;
var SDKToken = (function (_super) {
    __extends(SDKToken, _super);
    function SDKToken(instance) {
        _super.call(this, instance);
        this.id = null;
        this.ttl = null;
        this.created = null;
        this.userId = null;
        this.user = null;
        this.rememberMe = null;
    }
    return SDKToken;
}(AccessToken));
exports.SDKToken = SDKToken;
//# sourceMappingURL=BaseModels.js.map