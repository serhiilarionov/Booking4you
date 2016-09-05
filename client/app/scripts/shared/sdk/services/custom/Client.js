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
var Client_1 = require('../../models/Client');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/share');
/**
 * Api services for the `Client` model.
 */
var ClientApi = (function (_super) {
    __extends(ClientApi, _super);
    function ClientApi(http, auth, searchParams, errorHandler) {
        _super.call(this, http, auth, searchParams, errorHandler);
        this.auth = auth;
        this.searchParams = searchParams;
    }
    /**
     * Find a related item by id for companies.
     *
     * @param any id User id
     *
     * @param any fk Foreign key for companies
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.findByIdCompanies = function (id, fk) {
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/:id/companies/:fk";
        var routeParams = {
            id: id,
            fk: fk
        };
        var postBody = {};
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instance) { return new Client_1.Client(instance); });
    };
    /**
     * Delete a related item by id for companies.
     *
     * @param any id User id
     *
     * @param any fk Foreign key for companies
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ClientApi.prototype.destroyByIdCompanies = function (id, fk) {
        var method = "DELETE";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/:id/companies/:fk";
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
     * Update a related item by id for companies.
     *
     * @param any id User id
     *
     * @param any fk Foreign key for companies
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
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.updateByIdCompanies = function (id, fk, data) {
        if (data === void 0) { data = undefined; }
        var method = "PUT";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/:id/companies/:fk";
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
     * Add a related item by id for companies.
     *
     * @param any id User id
     *
     * @param any fk Foreign key for companies
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
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.linkCompanies = function (id, fk, data) {
        if (data === void 0) { data = undefined; }
        var method = "PUT";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/:id/companies/rel/:fk";
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
     * Remove the companies relation to an item by id.
     *
     * @param any id User id
     *
     * @param any fk Foreign key for companies
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ClientApi.prototype.unlinkCompanies = function (id, fk) {
        var method = "DELETE";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/:id/companies/rel/:fk";
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
     * Check the existence of companies relation to an item by id.
     *
     * @param any id User id
     *
     * @param any fk Foreign key for companies
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.existsCompanies = function (id, fk) {
        var method = "HEAD";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/:id/companies/rel/:fk";
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
     * Queries companies of Client.
     *
     * @param any id User id
     *
     * @param object filter
     *
     * @returns object[] An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.getCompanies = function (id, filter) {
        if (filter === void 0) { filter = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/:id/companies";
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
     * Creates a new instance in companies of this model.
     *
     * @param any id User id
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
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.createCompanies = function (id, data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/:id/companies";
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
     * Deletes all companies of this model.
     *
     * @param any id User id
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ClientApi.prototype.deleteCompanies = function (id) {
        var method = "DELETE";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/:id/companies";
        var routeParams = {
            id: id
        };
        var postBody = {};
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * Counts companies of Client.
     *
     * @param any id User id
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
    ClientApi.prototype.countCompanies = function (id, where) {
        if (where === void 0) { where = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/:id/companies/count";
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
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.create = function (data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients";
        var routeParams = {};
        var postBody = {
            data: data
        };
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instance) { return new Client_1.Client(instance); });
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
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.upsert = function (data) {
        if (data === void 0) { data = undefined; }
        var method = "PATCH";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients";
        var routeParams = {};
        var postBody = {
            data: data
        };
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instance) { return new Client_1.Client(instance); });
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
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.replaceOrCreate = function (data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/replaceOrCreate";
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
    ClientApi.prototype.exists = function (id) {
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/:id/exists";
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
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.findById = function (id, filter) {
        if (filter === void 0) { filter = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/:id";
        var routeParams = {
            id: id
        };
        var postBody = {};
        var urlParams = {};
        if (filter)
            urlParams.filter = filter;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instance) { return new Client_1.Client(instance); });
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
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.replaceById = function (id, data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/:id/replace";
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
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.find = function (filter) {
        if (filter === void 0) { filter = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients";
        var routeParams = {};
        var postBody = {};
        var urlParams = {};
        if (filter)
            urlParams.filter = filter;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instances) {
            return instances.map(function (instance) { return new Client_1.Client(instance); });
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
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.findOne = function (filter) {
        if (filter === void 0) { filter = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/findOne";
        var routeParams = {};
        var postBody = {};
        var urlParams = {};
        if (filter)
            urlParams.filter = filter;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instance) { return new Client_1.Client(instance); });
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
    ClientApi.prototype.updateAll = function (where, data) {
        if (where === void 0) { where = undefined; }
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/update";
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
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.deleteById = function (id) {
        var method = "DELETE";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/:id";
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
    ClientApi.prototype.count = function (where) {
        if (where === void 0) { where = undefined; }
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/count";
        var routeParams = {};
        var postBody = {};
        var urlParams = {};
        if (where)
            urlParams.where = where;
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * Login a user with username/email and password.
     *
     * @param string include Related objects to include in the response. See the description of return value for more details.
     *   Default value: `user`.
     *
     *  - `rememberMe` - `boolean` - Whether the authentication credentials
     *     should be remembered in localStorage across app/browser restarts.
     *     Default: `true`.
     *
     * @param object data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * The response body contains properties of the AccessToken created on login.
     * Depending on the value of `include` parameter, the body may contain additional properties:
     *
     *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
     *
     *
     */
    ClientApi.prototype.login = function (credentials, include) {
        var _this = this;
        if (include === void 0) { include = 'user'; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/login";
        var routeParams = {};
        var postBody = {
            credentials: credentials
        };
        var urlParams = {};
        if (include)
            urlParams.include = include;
        var result = this.request(method, url, routeParams, urlParams, postBody)
            .share();
        result.subscribe(function (response) {
            _this.auth.setUser(response.id, response.userId, response.user);
            _this.auth.setRememberMe(true);
            _this.auth.save();
        }, function () { return null; });
        return result;
    };
    /**
     * Logout a user with access token.
     *
     * @param object data Request data.
     *
     *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ClientApi.prototype.logout = function () {
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/logout";
        var routeParams = {};
        var postBody = {};
        var urlParams = {};
        urlParams.access_token = this.auth.getAccessTokenId();
        this.auth.clearStorage();
        this.auth.clearUser();
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result;
    };
    /**
     * Creates a new instance in companies of this model.
     *
     * @param any id User id
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
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.createManyCompanies = function (id, data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients/:id/companies";
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
     * This usually means the response is a `Client` object.)
     * </em>
     */
    ClientApi.prototype.createMany = function (data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() +
            "/clients";
        var routeParams = {};
        var postBody = {
            data: data
        };
        var urlParams = {};
        var result = this.request(method, url, routeParams, urlParams, postBody);
        return result.map(function (instances) {
            return instances.map(function (instance) { return new Client_1.Client(instance); });
        });
    };
    /**
     * @ngdoc method
     * @name sdk.Client#getCurrent
     * @methodOf sdk.Client
     *
     * @description
     *
     * Get data of the currently logged user. Fail with HTTP result 401
     * when there is no user logged in.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     */
    ClientApi.prototype.getCurrent = function () {
        var method = "GET";
        var url = lb_config_1.LoopBackConfig.getPath() + "/" + lb_config_1.LoopBackConfig.getApiVersion() + "/clients" + "/:id";
        var id = this.auth.getCurrentUserId();
        if (id == null)
            id = '__anonymous__';
        var routeParams = { id: id };
        var urlParams = {};
        var postBody = {};
        return this.request(method, url, routeParams, urlParams, postBody);
    };
    /**
     * Get data of the currently logged user that was returned by the last
     * call to {@link sdk.Client#login} or
     * {@link sdk.Client#getCurrent}. Return null when there
     * is no user logged in or the data of the current user were not fetched
     * yet.
     *
     * @returns object A Client instance.
     */
    ClientApi.prototype.getCachedCurrent = function () {
        return this.auth.getCurrentUserData();
    };
    /**
     * @name sdk.Client#isAuthenticated
     *
     * @returns {boolean} True if the current user is authenticated (logged in).
     */
    ClientApi.prototype.isAuthenticated = function () {
        return !(this.getCurrentId() === '' || this.getCurrentId() == null || this.getCurrentId() == 'null');
    };
    /**
     * @name sdk.Client#getCurrentId
     *
     * @returns object Id of the currently logged-in user or null.
     */
    ClientApi.prototype.getCurrentId = function () {
        return this.auth.getCurrentUserId();
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Client`.
     */
    ClientApi.prototype.getModelName = function () {
        return "Client";
    };
    ClientApi = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __param(1, core_1.Inject(auth_service_1.LoopBackAuth)),
        __param(2, core_1.Inject(search_params_1.JSONSearchParams)),
        __param(3, core_1.Optional()),
        __param(3, core_1.Inject(error_service_1.ErrorHandler)), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.LoopBackAuth, search_params_1.JSONSearchParams, error_service_1.ErrorHandler])
    ], ClientApi);
    return ClientApi;
}(base_service_1.BaseLoopBackApi));
exports.ClientApi = ClientApi;
//# sourceMappingURL=Client.js.map