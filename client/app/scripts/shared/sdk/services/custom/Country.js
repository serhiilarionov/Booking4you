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
var Country_1 = require('../../models/Country');
/**
 * Api services for the `Country` model.
 */
var CountryApi = (function (_super) {
    __extends(CountryApi, _super);
    function CountryApi(http, auth, searchParams, errorHandler) {
        _super.call(this, http, auth, searchParams, errorHandler);
        this.auth = auth;
        this.searchParams = searchParams;
    }
    /**
     * Find a related item by id for regions.
     *
     * @param any id PersistedModel id
     *
     * @param any fk Foreign key for regions
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Country` object.)
     * </em>
     */
    CountryApi.prototype.findByIdRegions = function (id, fk) {
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/:id/regions/:fk";
        var routeParams = {
            id: id,
            fk: fk
        };
        var postBody = {};
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instance) { return new Country_1.Country(instance); });
    };
    /**
     * Delete a related item by id for regions.
     *
     * @param any id PersistedModel id
     *
     * @param any fk Foreign key for regions
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    CountryApi.prototype.destroyByIdRegions = function (id, fk) {
        var method = "DELETE";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/:id/regions/:fk";
        var routeParams = {
            id: id,
            fk: fk
        };
        var postBody = {};
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * Update a related item by id for regions.
     *
     * @param any id PersistedModel id
     *
     * @param any fk Foreign key for regions
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
     * This usually means the response is a `Country` object.)
     * </em>
     */
    CountryApi.prototype.updateByIdRegions = function (id, fk, data) {
        if (data === void 0) { data = undefined; }
        var method = "PUT";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/:id/regions/:fk";
        var routeParams = {
            id: id,
            fk: fk
        };
        var postBody = {
            data: data
        };
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * Queries regions of Country.
     *
     * @param any id PersistedModel id
     *
     * @param object filter
     *
     * @returns object[] An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Country` object.)
     * </em>
     */
    CountryApi.prototype.getRegions = function (id, filter) {
        if (filter === void 0) { filter = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/:id/regions";
        var routeParams = {
            id: id
        };
        var postBody = {};
        var urlParams = {};
        if (filter)
            urlParams.filter = filter;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * Creates a new instance in regions of this model.
     *
     * @param any id PersistedModel id
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
     * This usually means the response is a `Country` object.)
     * </em>
     */
    CountryApi.prototype.createRegions = function (id, data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/:id/regions";
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
     * Deletes all regions of this model.
     *
     * @param any id PersistedModel id
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    CountryApi.prototype.deleteRegions = function (id) {
        var method = "DELETE";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/:id/regions";
        var routeParams = {
            id: id
        };
        var postBody = {};
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * Counts regions of Country.
     *
     * @param any id PersistedModel id
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
    CountryApi.prototype.countRegions = function (id, where) {
        if (where === void 0) { where = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/:id/regions/count";
        var routeParams = {
            id: id
        };
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
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Country` object.)
     * </em>
     */
    CountryApi.prototype.create = function (data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries";
        var routeParams = {};
        var postBody = {
            data: data
        };
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instance) { return new Country_1.Country(instance); });
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
     * This usually means the response is a `Country` object.)
     * </em>
     */
    CountryApi.prototype.upsert = function (data) {
        if (data === void 0) { data = undefined; }
        var method = "PUT";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries";
        var routeParams = {};
        var postBody = {
            data: data
        };
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instance) { return new Country_1.Country(instance); });
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
     * This usually means the response is a `Country` object.)
     * </em>
     */
    CountryApi.prototype.replaceOrCreate = function (data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/replaceOrCreate";
        var routeParams = {};
        var postBody = {
            data: data
        };
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * Update an existing model instance or insert a new one into the data source based on the where criteria.
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
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Country` object.)
     * </em>
     */
    CountryApi.prototype.upsertWithWhere = function (where, data) {
        if (where === void 0) { where = undefined; }
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/upsertWithWhere";
        var routeParams = {};
        var postBody = {
            data: data
        };
        var urlParams = {};
        if (where)
            urlParams.where = where;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instance) { return new Country_1.Country(instance); });
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
    CountryApi.prototype.exists = function (id) {
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/:id/exists";
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
     * This usually means the response is a `Country` object.)
     * </em>
     */
    CountryApi.prototype.findById = function (id, filter) {
        if (filter === void 0) { filter = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/:id";
        var routeParams = {
            id: id
        };
        var postBody = {};
        var urlParams = {};
        if (filter)
            urlParams.filter = filter;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instance) { return new Country_1.Country(instance); });
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
     * This usually means the response is a `Country` object.)
     * </em>
     */
    CountryApi.prototype.replaceById = function (id, data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/:id/replace";
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
     * This usually means the response is a `Country` object.)
     * </em>
     */
    CountryApi.prototype.find = function (filter) {
        if (filter === void 0) { filter = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries";
        var routeParams = {};
        var postBody = {};
        var urlParams = {};
        if (filter)
            urlParams.filter = filter;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instances) {
            return instances.map(function (instance) { return new Country_1.Country(instance); });
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
     * This usually means the response is a `Country` object.)
     * </em>
     */
    CountryApi.prototype.findOne = function (filter) {
        if (filter === void 0) { filter = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/findOne";
        var routeParams = {};
        var postBody = {};
        var urlParams = {};
        if (filter)
            urlParams.filter = filter;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instance) { return new Country_1.Country(instance); });
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
    CountryApi.prototype.updateAll = function (where, data) {
        if (where === void 0) { where = undefined; }
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/update";
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
     * This usually means the response is a `Country` object.)
     * </em>
     */
    CountryApi.prototype.deleteById = function (id) {
        var method = "DELETE";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/:id";
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
    CountryApi.prototype.count = function (where) {
        if (where === void 0) { where = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/count";
        var routeParams = {};
        var postBody = {};
        var urlParams = {};
        if (where)
            urlParams.where = where;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * Creates a new instance in regions of this model.
     *
     * @param any id PersistedModel id
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
     * This usually means the response is a `Country` object.)
     * </em>
     */
    CountryApi.prototype.createManyRegions = function (id, data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries/:id/regions";
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
     * This usually means the response is a `Country` object.)
     * </em>
     */
    CountryApi.prototype.createMany = function (data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/countries";
        var routeParams = {};
        var postBody = {
            data: data
        };
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instances) {
            return instances.map(function (instance) { return new Country_1.Country(instance); });
        });
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Country`.
     */
    CountryApi.prototype.getModelName = function () {
        return "Country";
    };
    CountryApi = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __param(1, core_1.Inject(auth_service_1.LoopBackAuth)),
        __param(2, core_1.Inject(search_params_1.JSONSearchParams)),
        __param(3, core_1.Optional()),
        __param(3, core_1.Inject(error_service_1.ErrorHandler)), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.LoopBackAuth, search_params_1.JSONSearchParams, error_service_1.ErrorHandler])
    ], CountryApi);
    return CountryApi;
}(base_service_1.BaseLoopBackApi));
exports.CountryApi = CountryApi;
//# sourceMappingURL=Country.js.map