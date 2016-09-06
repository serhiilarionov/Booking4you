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
var CompanyLocation_1 = require('../../models/CompanyLocation');
/**
 * Api services for the `CompanyLocation` model.
 */
var CompanyLocationApi = (function (_super) {
    __extends(CompanyLocationApi, _super);
    function CompanyLocationApi(http, auth, searchParams, errorHandler) {
        _super.call(this, http, auth, searchParams, errorHandler);
        this.auth = auth;
        this.searchParams = searchParams;
    }
    /**
     * Create a new instance of the model and persist it into the data source.
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
     * This usually means the response is a `CompanyLocation` object.)
     * </em>
     */
    CompanyLocationApi.prototype.create = function (data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/CompanyLocations";
        var routeParams = {};
        var postBody = {
            data: data
        };
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instance) { return new CompanyLocation_1.CompanyLocation(instance); });
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
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
     * This usually means the response is a `CompanyLocation` object.)
     * </em>
     */
    CompanyLocationApi.prototype.upsert = function (data) {
        if (data === void 0) { data = undefined; }
        var method = "PUT";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/CompanyLocations";
        var routeParams = {};
        var postBody = {
            data: data
        };
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instance) { return new CompanyLocation_1.CompanyLocation(instance); });
    };
    /**
     * Replace an existing model instance or insert a new one into the data source.
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
     * This usually means the response is a `CompanyLocation` object.)
     * </em>
     */
    CompanyLocationApi.prototype.replaceOrCreate = function (data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/CompanyLocations/replaceOrCreate";
        var routeParams = {};
        var postBody = {
            data: data
        };
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param any id Model id
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `exists` – `{boolean}` -
     */
    CompanyLocationApi.prototype.exists = function (id) {
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/CompanyLocations/:id/exists";
        var routeParams = {
            id: id
        };
        var postBody = {};
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * Find a model instance by {{id}} from the data source.
     *
     * @param any id Model id
     *
     * @param object filter Filter defining fields and include
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CompanyLocation` object.)
     * </em>
     */
    CompanyLocationApi.prototype.findById = function (id, filter) {
        if (filter === void 0) { filter = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/CompanyLocations/:id";
        var routeParams = {
            id: id
        };
        var postBody = {};
        var urlParams = {};
        if (filter)
            urlParams.filter = filter;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instance) { return new CompanyLocation_1.CompanyLocation(instance); });
    };
    /**
     * Replace attributes for a model instance and persist it into the data source.
     *
     * @param any id Model id
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
     * This usually means the response is a `CompanyLocation` object.)
     * </em>
     */
    CompanyLocationApi.prototype.replaceById = function (id, data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/CompanyLocations/:id/replace";
        var routeParams = {
            id: id
        };
        var postBody = {
            data: data
        };
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * Find all instances of the model matched by filter from the data source.
     *
     * @param object filter Filter defining fields, where, include, order, offset, and limit
     *
     * @returns object[] An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CompanyLocation` object.)
     * </em>
     */
    CompanyLocationApi.prototype.find = function (filter) {
        if (filter === void 0) { filter = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/CompanyLocations";
        var routeParams = {};
        var postBody = {};
        var urlParams = {};
        if (filter)
            urlParams.filter = filter;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instances) {
            return instances.map(function (instance) { return new CompanyLocation_1.CompanyLocation(instance); });
        });
    };
    /**
     * Find first instance of the model matched by filter from the data source.
     *
     * @param object filter Filter defining fields, where, include, order, offset, and limit
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CompanyLocation` object.)
     * </em>
     */
    CompanyLocationApi.prototype.findOne = function (filter) {
        if (filter === void 0) { filter = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/CompanyLocations/findOne";
        var routeParams = {};
        var postBody = {};
        var urlParams = {};
        if (filter)
            urlParams.filter = filter;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instance) { return new CompanyLocation_1.CompanyLocation(instance); });
    };
    /**
     * Update instances of the model matched by {{where}} from the data source.
     *
     * @param object where Criteria to match model instances
     *
     * @param object data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * The number of instances updated
     */
    CompanyLocationApi.prototype.updateAll = function (where, data) {
        if (where === void 0) { where = undefined; }
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/CompanyLocations/update";
        var routeParams = {};
        var postBody = {
            data: data
        };
        var urlParams = {};
        if (where)
            urlParams.where = where;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * Delete a model instance by {{id}} from the data source.
     *
     * @param any id Model id
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CompanyLocation` object.)
     * </em>
     */
    CompanyLocationApi.prototype.deleteById = function (id) {
        var method = "DELETE";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/CompanyLocations/:id";
        var routeParams = {
            id: id
        };
        var postBody = {};
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * Count instances of the model matched by where from the data source.
     *
     * @param object where Criteria to match model instances
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    CompanyLocationApi.prototype.count = function (where) {
        if (where === void 0) { where = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/CompanyLocations/count";
        var routeParams = {};
        var postBody = {};
        var urlParams = {};
        if (where)
            urlParams.where = where;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * Create a new instance of the model and persist it into the data source.
     *
     * @param object data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns object[] An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `CompanyLocation` object.)
     * </em>
     */
    CompanyLocationApi.prototype.createMany = function (data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/CompanyLocations";
        var routeParams = {};
        var postBody = {
            data: data
        };
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instances) {
            return instances.map(function (instance) { return new CompanyLocation_1.CompanyLocation(instance); });
        });
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `CompanyLocation`.
     */
    CompanyLocationApi.prototype.getModelName = function () {
        return "CompanyLocation";
    };
    CompanyLocationApi = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __param(1, core_1.Inject(auth_service_1.LoopBackAuth)),
        __param(2, core_1.Inject(search_params_1.JSONSearchParams)),
        __param(3, core_1.Optional()),
        __param(3, core_1.Inject(error_service_1.ErrorHandler)), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.LoopBackAuth, search_params_1.JSONSearchParams, error_service_1.ErrorHandler])
    ], CompanyLocationApi);
    return CompanyLocationApi;
}(base_service_1.BaseLoopBackApi));
exports.CompanyLocationApi = CompanyLocationApi;
//# sourceMappingURL=CompanyLocation.js.map