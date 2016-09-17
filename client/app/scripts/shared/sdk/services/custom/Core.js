"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var base_service_1 = require('../core/base.service');
var lb_config_1 = require('../../lb.config');
var auth_service_1 = require('../core/auth.service');
var search_params_1 = require('../core/search.params');
var error_service_1 = require('../core/error.service');
require('rxjs/add/operator/map');
/**
 * Api services for the `Core` model.
 */
var CoreApi = (function (_super) {
    __extends(CoreApi, _super);
    function CoreApi(http, auth, searchParams, errorHandler) {
        _super.call(this, http, auth, searchParams, errorHandler);
        this.auth = auth;
        this.searchParams = searchParams;
    }
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param string path
     *
     * @param object data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Core` object.)
     * </em>
     */
    CoreApi.prototype.run = function (path, body) {
        if (path === void 0) { path = undefined; }
        if (body === void 0) { body = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/core/run/:path";
        var routeParams = {
            path: path
        };
        var postBody = {
            body: body
        };
        var urlParams = {};
        if (body)
            urlParams.body = body;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param object data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    CoreApi.prototype.invoke = function (request) {
        if (request === void 0) { request = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/core/invoke";
        var routeParams = {};
        var postBody = {
            request: request
        };
        var urlParams = {};
        if (request)
            urlParams.request = request;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param object data Request data.
     *
     *  - `phone` – `{string}` -
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `result` – `{object}` -
     */
    CoreApi.prototype.phoneVerification = function (phone) {
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/core/phoneVerification";
        var routeParams = {};
        var postBody = {
            phone: phone
        };
        var urlParams = {};
        if (phone)
            urlParams.phone = phone;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param object data Request data.
     *
     *  - `code` – `{string}` -
     *
     *  - `smsId` – `{string}` -
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `result` – `{object}` -
     */
    CoreApi.prototype.phoneVerificationConfirm = function (code, smsId) {
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/core/phoneVerificationConfirm";
        var routeParams = {};
        var postBody = {
            code: code,
            smsId: smsId
        };
        var urlParams = {};
        if (code)
            urlParams.code = code;
        if (smsId)
            urlParams.smsId = smsId;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param object data Request data.
     *
     *  - `id` – `{string}` -
     *
     *  - `phone` – `{string}` -
     *
     *  - `status` – `{string}` -
     *
     *  - `time` – `{string}` -
     *
     *  - `ts` – `{string}` -
     *
     *  - `err` – `{string}` -
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `result` – `{object}` -
     */
    CoreApi.prototype.smsStatus = function (id, phone, status, time, ts, err) {
        if (time === void 0) { time = undefined; }
        if (ts === void 0) { ts = undefined; }
        if (err === void 0) { err = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/core/smsStatus";
        var routeParams = {
            id: id
        };
        var postBody = {
            id: id,
            phone: phone,
            status: status,
            time: time,
            ts: ts,
            err: err
        };
        var urlParams = {};
        if (phone)
            urlParams.phone = phone;
        if (status)
            urlParams.status = status;
        if (time)
            urlParams.time = time;
        if (ts)
            urlParams.ts = ts;
        if (err)
            urlParams.err = err;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param object data Request data.
     *
     *  - `name` – `{string}` -
     *
     *  - `type` – `{string}` -
     *
     *  - `process` – `{string}` -
     *
     *  - `data` – `{object}` -
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `result` – `{object}` -
     */
    CoreApi.prototype.notify = function (name, type, process, data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/core/notify";
        var routeParams = {};
        var postBody = {
            name: name,
            type: type,
            process: process,
            data: data
        };
        var urlParams = {};
        if (name)
            urlParams.name = name;
        if (type)
            urlParams.type = type;
        if (process)
            urlParams.process = process;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param object data Request data.
     *
     *  - `taskId` – `{string}` -
     *
     *  - `status` – `{string}` -
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `result` – `{object}` -
     */
    CoreApi.prototype.bookingStatusUpdate = function (taskId, status) {
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/core/bookingStatusUpdate";
        var routeParams = {};
        var postBody = {
            taskId: taskId,
            status: status
        };
        var urlParams = {};
        if (taskId)
            urlParams.taskId = taskId;
        if (status)
            urlParams.status = status;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param object data Request data.
     *
     *  - `companyId` – `{number}` -
     *
     *  - `date` – `{string}` -
     *
     *  - `serviceList` – `{any}` -
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `result` – `{object}` -
     */
    CoreApi.prototype.createBooking = function (companyId, date, serviceList) {
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/core/createBooking";
        var routeParams = {};
        var postBody = {
            companyId: companyId,
            date: date,
            serviceList: serviceList
        };
        var urlParams = {};
        if (companyId)
            urlParams.companyId = companyId;
        if (date)
            urlParams.date = date;
        if (serviceList)
            urlParams.serviceList = serviceList;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Core`.
     */
    CoreApi.prototype.getModelName = function () {
        return "Core";
    };
    CoreApi = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __param(1, core_1.Inject(auth_service_1.LoopBackAuth)),
        __param(2, core_1.Inject(search_params_1.JSONSearchParams)),
        __param(3, core_1.Optional()),
        __param(3, core_1.Inject(error_service_1.ErrorHandler)), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.LoopBackAuth, search_params_1.JSONSearchParams, error_service_1.ErrorHandler])
    ], CoreApi);
    return CoreApi;
}(base_service_1.BaseLoopBackApi));
exports.CoreApi = CoreApi;
//# sourceMappingURL=Core.js.map