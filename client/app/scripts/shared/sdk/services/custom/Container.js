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
 * Api services for the `Container` model.
 */
var ContainerApi = (function (_super) {
    __extends(ContainerApi, _super);
    function ContainerApi(http, auth, searchParams, errorHandler) {
        _super.call(this, http, auth, searchParams, errorHandler);
        this.auth = auth;
        this.searchParams = searchParams;
    }
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @returns object[] An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Container` object.)
     * </em>
     */
    ContainerApi.prototype.getContainers = function () {
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Containers";
        var routeParams = {};
        var postBody = {};
        var urlParams = {};
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
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Container` object.)
     * </em>
     */
    ContainerApi.prototype.createContainer = function (options) {
        if (options === void 0) { options = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Containers";
        var routeParams = {};
        var postBody = {
            options: options
        };
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param string container
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `` – `{}` -
     */
    ContainerApi.prototype.destroyContainer = function (container) {
        if (container === void 0) { container = undefined; }
        var method = "DELETE";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Containers/:container";
        var routeParams = {
            container: container
        };
        var postBody = {};
        var urlParams = {};
        if (container)
            urlParams.container = container;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param string container
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Container` object.)
     * </em>
     */
    ContainerApi.prototype.getContainer = function (container) {
        if (container === void 0) { container = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Containers/:container";
        var routeParams = {
            container: container
        };
        var postBody = {};
        var urlParams = {};
        if (container)
            urlParams.container = container;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param string container
     *
     * @returns object[] An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Container` object.)
     * </em>
     */
    ContainerApi.prototype.getFiles = function (container) {
        if (container === void 0) { container = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Containers/:container/files";
        var routeParams = {
            container: container
        };
        var postBody = {};
        var urlParams = {};
        if (container)
            urlParams.container = container;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param string container
     *
     * @param string file
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Container` object.)
     * </em>
     */
    ContainerApi.prototype.getFile = function (container, file) {
        if (container === void 0) { container = undefined; }
        if (file === void 0) { file = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Containers/:container/files/:file";
        var routeParams = {
            container: container,
            file: file
        };
        var postBody = {};
        var urlParams = {};
        if (container)
            urlParams.container = container;
        if (file)
            urlParams.file = file;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param string container
     *
     * @param string file
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `` – `{}` -
     */
    ContainerApi.prototype.removeFile = function (container, file) {
        if (container === void 0) { container = undefined; }
        if (file === void 0) { file = undefined; }
        var method = "DELETE";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Containers/:container/files/:file";
        var routeParams = {
            container: container,
            file: file
        };
        var postBody = {};
        var urlParams = {};
        if (container)
            urlParams.container = container;
        if (file)
            urlParams.file = file;
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
     *  - `req` – `{object}` -
     *
     *  - `res` – `{object}` -
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `result` – `{object}` -
     */
    ContainerApi.prototype.upload = function (req, res) {
        if (req === void 0) { req = undefined; }
        if (res === void 0) { res = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Containers/:container/upload";
        var routeParams = {};
        var postBody = {
            req: req,
            res: res
        };
        var urlParams = {};
        if (req)
            urlParams.req = req;
        if (res)
            urlParams.res = res;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * <em>
           * (The remote method definition does not provide any description.)
           * </em>
     *
     * @param string container
     *
     * @param string file
     *
     * @param object req
     *
     * @param object res
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ContainerApi.prototype.download = function (container, file, req, res) {
        if (container === void 0) { container = undefined; }
        if (file === void 0) { file = undefined; }
        if (req === void 0) { req = undefined; }
        if (res === void 0) { res = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/Containers/:container/download/:file";
        var routeParams = {
            container: container,
            file: file
        };
        var postBody = {};
        var urlParams = {};
        if (req)
            urlParams.req = req;
        if (res)
            urlParams.res = res;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Container`.
     */
    ContainerApi.prototype.getModelName = function () {
        return "Container";
    };
    ContainerApi = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __param(1, core_1.Inject(auth_service_1.LoopBackAuth)),
        __param(2, core_1.Inject(search_params_1.JSONSearchParams)),
        __param(3, core_1.Optional()),
        __param(3, core_1.Inject(error_service_1.ErrorHandler)), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.LoopBackAuth, search_params_1.JSONSearchParams, error_service_1.ErrorHandler])
    ], ContainerApi);
    return ContainerApi;
}(base_service_1.BaseLoopBackApi));
exports.ContainerApi = ContainerApi;
//# sourceMappingURL=Container.js.map