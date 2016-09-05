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
/* tslint:disable */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var search_params_1 = require('./search.params');
var error_service_1 = require('./error.service');
var auth_service_1 = require('./auth.service');
var lb_config_1 = require('../../lb.config');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
/**
* @module BaseLoopBackApi
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @contributor Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @license MTI
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
var BaseLoopBackApi = (function () {
    function BaseLoopBackApi(http, auth, searchParams, errorHandler) {
        this.http = http;
        this.auth = auth;
        this.searchParams = searchParams;
        this.errorHandler = errorHandler;
    }
    /**
     * Process request
     * @param string  method      Request method (GET, POST, PUT)
     * @param string  url         Request url (my-host/my-url/:id)
     * @param any     routeParams Values of url parameters
     * @param any     urlParams   Parameters for building url (filter and other)
     * @param any     postBody    Request postBody
     * @param boolean isio        Request socket connection (When IO is enabled)
     */
    BaseLoopBackApi.prototype.request = function (method, url, routeParams, urlParams, postBody) {
        if (routeParams === void 0) { routeParams = {}; }
        if (urlParams === void 0) { urlParams = {}; }
        if (postBody === void 0) { postBody = null; }
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        if (this.auth.getAccessTokenId()) {
            headers.append('Authorization', lb_config_1.LoopBackConfig.getAuthPrefix() + this.auth.getAccessTokenId());
        }
        var requestUrl = url;
        var key;
        for (key in routeParams) {
            requestUrl = requestUrl.replace(new RegExp(":" + key + "(\/|$)", "g"), routeParams[key] + "$1");
        }
        // Body fix for built in remote methods using "data", "options" or "credentials
        // that are the actual body, Custom remote method properties are different and need
        // to be wrapped into a body object
        var body;
        if (typeof postBody === 'object' &&
            (postBody.data || postBody.credentials || postBody.options) &&
            Object.keys(postBody).length === 1) {
            body = postBody.data ? postBody.data :
                postBody.options ? postBody.options :
                    postBody.credentials;
        }
        else {
            body = postBody;
        }
        this.searchParams.setJSON(urlParams);
        var request = new http_1.Request({
            headers: headers,
            method: method,
            url: requestUrl,
            search: this.searchParams.getURLSearchParams(),
            body: body ? JSON.stringify(body) : undefined
        });
        return this.http.request(request)
            .map(function (res) { return (res.text() != "" ? res.json() : {}); })
            .catch(this.errorHandler.handleError);
    };
    BaseLoopBackApi = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __param(1, core_1.Inject(auth_service_1.LoopBackAuth)),
        __param(2, core_1.Inject(search_params_1.JSONSearchParams)),
        __param(3, core_1.Optional()),
        __param(3, core_1.Inject(error_service_1.ErrorHandler)), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.LoopBackAuth, search_params_1.JSONSearchParams, error_service_1.ErrorHandler])
    ], BaseLoopBackApi);
    return BaseLoopBackApi;
}());
exports.BaseLoopBackApi = BaseLoopBackApi;
//# sourceMappingURL=base.service.js.map