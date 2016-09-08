// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Category
 * @header lbServices.Category
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Category` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Category",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/categories/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Category.companies.findById() instead.
            "prototype$__findById__companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/categories/:id/companies/:fk",
              method: "GET",
            },

            // INTERNAL. Use Category.companies.destroyById() instead.
            "prototype$__destroyById__companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/categories/:id/companies/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Category.companies.updateById() instead.
            "prototype$__updateById__companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/categories/:id/companies/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Category.services.findById() instead.
            "prototype$__findById__services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/categories/:id/services/:fk",
              method: "GET",
            },

            // INTERNAL. Use Category.services.destroyById() instead.
            "prototype$__destroyById__services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/categories/:id/services/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Category.services.updateById() instead.
            "prototype$__updateById__services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/categories/:id/services/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Category.companies() instead.
            "prototype$__get__companies": {
              isArray: true,
              url: urlBase + "/categories/:id/companies",
              method: "GET",
            },

            // INTERNAL. Use Category.companies.create() instead.
            "prototype$__create__companies": {
              url: urlBase + "/categories/:id/companies",
              method: "POST",
            },

            // INTERNAL. Use Category.companies.destroyAll() instead.
            "prototype$__delete__companies": {
              url: urlBase + "/categories/:id/companies",
              method: "DELETE",
            },

            // INTERNAL. Use Category.companies.count() instead.
            "prototype$__count__companies": {
              url: urlBase + "/categories/:id/companies/count",
              method: "GET",
            },

            // INTERNAL. Use Category.services() instead.
            "prototype$__get__services": {
              isArray: true,
              url: urlBase + "/categories/:id/services",
              method: "GET",
            },

            // INTERNAL. Use Category.services.create() instead.
            "prototype$__create__services": {
              url: urlBase + "/categories/:id/services",
              method: "POST",
            },

            // INTERNAL. Use Category.services.destroyAll() instead.
            "prototype$__delete__services": {
              url: urlBase + "/categories/:id/services",
              method: "DELETE",
            },

            // INTERNAL. Use Category.services.count() instead.
            "prototype$__count__services": {
              url: urlBase + "/categories/:id/services/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#create
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/categories",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#createMany
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/categories",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#upsert
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/categories",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#replaceOrCreate
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/categories/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#exists
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/categories/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#findById
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/categories/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#replaceById
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/categories/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#find
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/categories",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#findOne
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/categories/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#updateAll
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/categories/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#deleteById
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/categories/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#count
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/categories/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#findWithCompany
             * @methodOf lbServices.Category
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `argument` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "findWithCompany": {
              isArray: true,
              url: urlBase + "/categories/findWithCompany",
              method: "GET",
            },

            // INTERNAL. Use Company.categories.findById() instead.
            "::findById::Company::categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/categories/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.categories.destroyById() instead.
            "::destroyById::Company::categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/categories/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.categories.updateById() instead.
            "::updateById::Company::categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/categories/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.categories.link() instead.
            "::link::Company::categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/categories/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.categories.unlink() instead.
            "::unlink::Company::categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/categories/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.categories.exists() instead.
            "::exists::Company::categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/categories/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Company.categories() instead.
            "::get::Company::categories": {
              isArray: true,
              url: urlBase + "/companies/:id/categories",
              method: "GET",
            },

            // INTERNAL. Use Company.categories.create() instead.
            "::create::Company::categories": {
              url: urlBase + "/companies/:id/categories",
              method: "POST",
            },

            // INTERNAL. Use Company.categories.createMany() instead.
            "::createMany::Company::categories": {
              isArray: true,
              url: urlBase + "/companies/:id/categories",
              method: "POST",
            },

            // INTERNAL. Use Company.categories.destroyAll() instead.
            "::delete::Company::categories": {
              url: urlBase + "/companies/:id/categories",
              method: "DELETE",
            },

            // INTERNAL. Use Company.categories.count() instead.
            "::count::Company::categories": {
              url: urlBase + "/companies/:id/categories/count",
              method: "GET",
            },

            // INTERNAL. Use CategoryCompany.category() instead.
            "::get::CategoryCompany::category": {
              url: urlBase + "/CategoryCompanies/:id/category",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Category#patchOrCreate
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Category#updateOrCreate
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Category#update
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Category#destroyById
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Category#removeById
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Category#modelName
        * @propertyOf lbServices.Category
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Category`.
        */
        R.modelName = "Category";

    /**
     * @ngdoc object
     * @name lbServices.Category.companies
     * @header lbServices.Category.companies
     * @object
     * @description
     *
     * The object `Category.companies` groups methods
     * manipulating `Company` instances related to `Category`.
     *
     * Call {@link lbServices.Category#companies Category.companies()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Category#companies
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Queries companies of Category.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.companies = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::Category::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.companies#count
             * @methodOf lbServices.Category.companies
             *
             * @description
             *
             * Counts companies of Category.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.companies.count = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::count::Category::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.companies#create
             * @methodOf lbServices.Category.companies
             *
             * @description
             *
             * Creates a new instance in companies of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.companies.create = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::create::Category::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.companies#createMany
             * @methodOf lbServices.Category.companies
             *
             * @description
             *
             * Creates a new instance in companies of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.companies.createMany = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::createMany::Category::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.companies#destroyAll
             * @methodOf lbServices.Category.companies
             *
             * @description
             *
             * Deletes all companies of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.companies.destroyAll = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::delete::Category::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.companies#destroyById
             * @methodOf lbServices.Category.companies
             *
             * @description
             *
             * Delete a related item by id for companies.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for companies
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.companies.destroyById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::destroyById::Category::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.companies#findById
             * @methodOf lbServices.Category.companies
             *
             * @description
             *
             * Find a related item by id for companies.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for companies
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.companies.findById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::findById::Category::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.companies#updateById
             * @methodOf lbServices.Category.companies
             *
             * @description
             *
             * Update a related item by id for companies.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for companies
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.companies.updateById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::updateById::Category::companies"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Category.services
     * @header lbServices.Category.services
     * @object
     * @description
     *
     * The object `Category.services` groups methods
     * manipulating `CompanyService` instances related to `Category`.
     *
     * Call {@link lbServices.Category#services Category.services()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Category#services
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Queries services of Category.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
        R.services = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::get::Category::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.services#count
             * @methodOf lbServices.Category.services
             *
             * @description
             *
             * Counts services of Category.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.services.count = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::count::Category::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.services#create
             * @methodOf lbServices.Category.services
             *
             * @description
             *
             * Creates a new instance in services of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
        R.services.create = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::create::Category::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.services#createMany
             * @methodOf lbServices.Category.services
             *
             * @description
             *
             * Creates a new instance in services of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
        R.services.createMany = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::createMany::Category::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.services#destroyAll
             * @methodOf lbServices.Category.services
             *
             * @description
             *
             * Deletes all services of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.services.destroyAll = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::delete::Category::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.services#destroyById
             * @methodOf lbServices.Category.services
             *
             * @description
             *
             * Delete a related item by id for services.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for services
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.services.destroyById = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::destroyById::Category::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.services#findById
             * @methodOf lbServices.Category.services
             *
             * @description
             *
             * Find a related item by id for services.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for services
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
        R.services.findById = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::findById::Category::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.services#updateById
             * @methodOf lbServices.Category.services
             *
             * @description
             *
             * Update a related item by id for services.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for services
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
        R.services.updateById = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::updateById::Category::services"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Company
 * @header lbServices.Company
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Company` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Company",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/companies/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Company.service.findById() instead.
            "prototype$__findById__service": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/service/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.service.destroyById() instead.
            "prototype$__destroyById__service": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/service/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.service.updateById() instead.
            "prototype$__updateById__service": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/service/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.details() instead.
            "prototype$__get__details": {
              url: urlBase + "/companies/:id/details",
              method: "GET",
            },

            // INTERNAL. Use Company.details.update() instead.
            "prototype$__update__details": {
              url: urlBase + "/companies/:id/details",
              method: "PUT",
            },

            // INTERNAL. Use Company.details.destroy() instead.
            "prototype$__destroy__details": {
              url: urlBase + "/companies/:id/details",
              method: "DELETE",
            },

            // INTERNAL. Use Company.location() instead.
            "prototype$__get__location": {
              url: urlBase + "/companies/:id/location",
              method: "GET",
            },

            // INTERNAL. Use Company.location.create() instead.
            "prototype$__create__location": {
              url: urlBase + "/companies/:id/location",
              method: "POST",
            },

            // INTERNAL. Use Company.location.update() instead.
            "prototype$__update__location": {
              url: urlBase + "/companies/:id/location",
              method: "PUT",
            },

            // INTERNAL. Use Company.location.destroy() instead.
            "prototype$__destroy__location": {
              url: urlBase + "/companies/:id/location",
              method: "DELETE",
            },

            // INTERNAL. Use Company.bookings.findById() instead.
            "prototype$__findById__bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/bookings/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.bookings.destroyById() instead.
            "prototype$__destroyById__bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/bookings/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.bookings.updateById() instead.
            "prototype$__updateById__bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/bookings/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.categories.findById() instead.
            "prototype$__findById__categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/categories/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.categories.destroyById() instead.
            "prototype$__destroyById__categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/categories/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.categories.updateById() instead.
            "prototype$__updateById__categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/categories/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.categories.link() instead.
            "prototype$__link__categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/categories/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.categories.unlink() instead.
            "prototype$__unlink__categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/categories/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.categories.exists() instead.
            "prototype$__exists__categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/categories/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Company.clients.findById() instead.
            "prototype$__findById__clients": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/clients/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.clients.destroyById() instead.
            "prototype$__destroyById__clients": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/clients/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.clients.updateById() instead.
            "prototype$__updateById__clients": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/clients/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.clients.link() instead.
            "prototype$__link__clients": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/clients/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.clients.unlink() instead.
            "prototype$__unlink__clients": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/clients/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.clients.exists() instead.
            "prototype$__exists__clients": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/clients/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Company.service() instead.
            "prototype$__get__service": {
              isArray: true,
              url: urlBase + "/companies/:id/service",
              method: "GET",
            },

            // INTERNAL. Use Company.service.create() instead.
            "prototype$__create__service": {
              url: urlBase + "/companies/:id/service",
              method: "POST",
            },

            // INTERNAL. Use Company.service.destroyAll() instead.
            "prototype$__delete__service": {
              url: urlBase + "/companies/:id/service",
              method: "DELETE",
            },

            // INTERNAL. Use Company.service.count() instead.
            "prototype$__count__service": {
              url: urlBase + "/companies/:id/service/count",
              method: "GET",
            },

            // INTERNAL. Use Company.bookings() instead.
            "prototype$__get__bookings": {
              isArray: true,
              url: urlBase + "/companies/:id/bookings",
              method: "GET",
            },

            // INTERNAL. Use Company.bookings.create() instead.
            "prototype$__create__bookings": {
              url: urlBase + "/companies/:id/bookings",
              method: "POST",
            },

            // INTERNAL. Use Company.bookings.destroyAll() instead.
            "prototype$__delete__bookings": {
              url: urlBase + "/companies/:id/bookings",
              method: "DELETE",
            },

            // INTERNAL. Use Company.bookings.count() instead.
            "prototype$__count__bookings": {
              url: urlBase + "/companies/:id/bookings/count",
              method: "GET",
            },

            // INTERNAL. Use Company.categories() instead.
            "prototype$__get__categories": {
              isArray: true,
              url: urlBase + "/companies/:id/categories",
              method: "GET",
            },

            // INTERNAL. Use Company.categories.create() instead.
            "prototype$__create__categories": {
              url: urlBase + "/companies/:id/categories",
              method: "POST",
            },

            // INTERNAL. Use Company.categories.destroyAll() instead.
            "prototype$__delete__categories": {
              url: urlBase + "/companies/:id/categories",
              method: "DELETE",
            },

            // INTERNAL. Use Company.categories.count() instead.
            "prototype$__count__categories": {
              url: urlBase + "/companies/:id/categories/count",
              method: "GET",
            },

            // INTERNAL. Use Company.clients() instead.
            "prototype$__get__clients": {
              isArray: true,
              url: urlBase + "/companies/:id/clients",
              method: "GET",
            },

            // INTERNAL. Use Company.clients.create() instead.
            "prototype$__create__clients": {
              url: urlBase + "/companies/:id/clients",
              method: "POST",
            },

            // INTERNAL. Use Company.clients.destroyAll() instead.
            "prototype$__delete__clients": {
              url: urlBase + "/companies/:id/clients",
              method: "DELETE",
            },

            // INTERNAL. Use Company.clients.count() instead.
            "prototype$__count__clients": {
              url: urlBase + "/companies/:id/clients/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#create
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/companies",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#createMany
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/companies",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#upsert
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/companies",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#replaceOrCreate
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/companies/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#exists
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/companies/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#findById
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/companies/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#replaceById
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/companies/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#find
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/companies",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#findOne
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/companies/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#updateAll
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/companies/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#deleteById
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/companies/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#count
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/companies/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#sift
             * @methodOf lbServices.Company
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `companies` – `{object=}` -
             */
            "sift": {
              url: urlBase + "/companies/sift",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Company#findWithCategory
             * @methodOf lbServices.Company
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
            "findWithCategory": {
              isArray: true,
              url: urlBase + "/companies/findWithCategory",
              method: "GET",
            },

            // INTERNAL. Use Category.companies.findById() instead.
            "::findById::Category::companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/categories/:id/companies/:fk",
              method: "GET",
            },

            // INTERNAL. Use Category.companies.destroyById() instead.
            "::destroyById::Category::companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/categories/:id/companies/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Category.companies.updateById() instead.
            "::updateById::Category::companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/categories/:id/companies/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Category.companies() instead.
            "::get::Category::companies": {
              isArray: true,
              url: urlBase + "/categories/:id/companies",
              method: "GET",
            },

            // INTERNAL. Use Category.companies.create() instead.
            "::create::Category::companies": {
              url: urlBase + "/categories/:id/companies",
              method: "POST",
            },

            // INTERNAL. Use Category.companies.createMany() instead.
            "::createMany::Category::companies": {
              isArray: true,
              url: urlBase + "/categories/:id/companies",
              method: "POST",
            },

            // INTERNAL. Use Category.companies.destroyAll() instead.
            "::delete::Category::companies": {
              url: urlBase + "/categories/:id/companies",
              method: "DELETE",
            },

            // INTERNAL. Use Category.companies.count() instead.
            "::count::Category::companies": {
              url: urlBase + "/categories/:id/companies/count",
              method: "GET",
            },

            // INTERNAL. Use CompanyService.company() instead.
            "::get::CompanyService::company": {
              url: urlBase + "/CompanyServices/:id/company",
              method: "GET",
            },

            // INTERNAL. Use Booking.company() instead.
            "::get::Booking::company": {
              url: urlBase + "/bookings/:id/company",
              method: "GET",
            },

            // INTERNAL. Use CategoryCompany.company() instead.
            "::get::CategoryCompany::company": {
              url: urlBase + "/CategoryCompanies/:id/company",
              method: "GET",
            },

            // INTERNAL. Use Client.companies.findById() instead.
            "::findById::Client::companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/clients/:id/companies/:fk",
              method: "GET",
            },

            // INTERNAL. Use Client.companies.destroyById() instead.
            "::destroyById::Client::companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/clients/:id/companies/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Client.companies.updateById() instead.
            "::updateById::Client::companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/clients/:id/companies/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Client.companies.link() instead.
            "::link::Client::companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/clients/:id/companies/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Client.companies.unlink() instead.
            "::unlink::Client::companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/clients/:id/companies/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Client.companies.exists() instead.
            "::exists::Client::companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/clients/:id/companies/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Client.companies() instead.
            "::get::Client::companies": {
              isArray: true,
              url: urlBase + "/clients/:id/companies",
              method: "GET",
            },

            // INTERNAL. Use Client.companies.create() instead.
            "::create::Client::companies": {
              url: urlBase + "/clients/:id/companies",
              method: "POST",
            },

            // INTERNAL. Use Client.companies.createMany() instead.
            "::createMany::Client::companies": {
              isArray: true,
              url: urlBase + "/clients/:id/companies",
              method: "POST",
            },

            // INTERNAL. Use Client.companies.destroyAll() instead.
            "::delete::Client::companies": {
              url: urlBase + "/clients/:id/companies",
              method: "DELETE",
            },

            // INTERNAL. Use Client.companies.count() instead.
            "::count::Client::companies": {
              url: urlBase + "/clients/:id/companies/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Company#patchOrCreate
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Company#updateOrCreate
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Company#update
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Company#destroyById
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Company#removeById
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Company#modelName
        * @propertyOf lbServices.Company
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Company`.
        */
        R.modelName = "Company";

    /**
     * @ngdoc object
     * @name lbServices.Company.service
     * @header lbServices.Company.service
     * @object
     * @description
     *
     * The object `Company.service` groups methods
     * manipulating `CompanyService` instances related to `Company`.
     *
     * Call {@link lbServices.Company#service Company.service()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Company#service
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Queries service of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
        R.service = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::get::Company::service"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.service#count
             * @methodOf lbServices.Company.service
             *
             * @description
             *
             * Counts service of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.service.count = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::count::Company::service"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.service#create
             * @methodOf lbServices.Company.service
             *
             * @description
             *
             * Creates a new instance in service of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
        R.service.create = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::create::Company::service"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.service#createMany
             * @methodOf lbServices.Company.service
             *
             * @description
             *
             * Creates a new instance in service of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
        R.service.createMany = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::createMany::Company::service"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.service#destroyAll
             * @methodOf lbServices.Company.service
             *
             * @description
             *
             * Deletes all service of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.service.destroyAll = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::delete::Company::service"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.service#destroyById
             * @methodOf lbServices.Company.service
             *
             * @description
             *
             * Delete a related item by id for service.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for service
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.service.destroyById = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::destroyById::Company::service"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.service#findById
             * @methodOf lbServices.Company.service
             *
             * @description
             *
             * Find a related item by id for service.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for service
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
        R.service.findById = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::findById::Company::service"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.service#updateById
             * @methodOf lbServices.Company.service
             *
             * @description
             *
             * Update a related item by id for service.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for service
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
        R.service.updateById = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::updateById::Company::service"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.details
     * @header lbServices.Company.details
     * @object
     * @description
     *
     * The object `Company.details` groups methods
     * manipulating `CompanyDetail` instances related to `Company`.
     *
     * Call {@link lbServices.Company#details Company.details()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Company#details
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Fetches hasOne relation details.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyDetail` object.)
             * </em>
             */
        R.details = function() {
          var TargetResource = $injector.get("CompanyDetail");
          var action = TargetResource["::get::Company::details"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.details#destroy
             * @methodOf lbServices.Company.details
             *
             * @description
             *
             * Deletes details of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.details.destroy = function() {
          var TargetResource = $injector.get("CompanyDetail");
          var action = TargetResource["::destroy::Company::details"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.details#update
             * @methodOf lbServices.Company.details
             *
             * @description
             *
             * Update details of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyDetail` object.)
             * </em>
             */
        R.details.update = function() {
          var TargetResource = $injector.get("CompanyDetail");
          var action = TargetResource["::update::Company::details"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.location
     * @header lbServices.Company.location
     * @object
     * @description
     *
     * The object `Company.location` groups methods
     * manipulating `CompanyLocation` instances related to `Company`.
     *
     * Call {@link lbServices.Company#location Company.location()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Company#location
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Fetches hasOne relation location.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
        R.location = function() {
          var TargetResource = $injector.get("CompanyLocation");
          var action = TargetResource["::get::Company::location"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.location#create
             * @methodOf lbServices.Company.location
             *
             * @description
             *
             * Creates a new instance in location of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
        R.location.create = function() {
          var TargetResource = $injector.get("CompanyLocation");
          var action = TargetResource["::create::Company::location"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.location#createMany
             * @methodOf lbServices.Company.location
             *
             * @description
             *
             * Creates a new instance in location of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
        R.location.createMany = function() {
          var TargetResource = $injector.get("CompanyLocation");
          var action = TargetResource["::createMany::Company::location"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.location#destroy
             * @methodOf lbServices.Company.location
             *
             * @description
             *
             * Deletes location of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.location.destroy = function() {
          var TargetResource = $injector.get("CompanyLocation");
          var action = TargetResource["::destroy::Company::location"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.location#update
             * @methodOf lbServices.Company.location
             *
             * @description
             *
             * Update location of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
        R.location.update = function() {
          var TargetResource = $injector.get("CompanyLocation");
          var action = TargetResource["::update::Company::location"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.bookings
     * @header lbServices.Company.bookings
     * @object
     * @description
     *
     * The object `Company.bookings` groups methods
     * manipulating `Booking` instances related to `Company`.
     *
     * Call {@link lbServices.Company#bookings Company.bookings()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Company#bookings
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Queries bookings of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
        R.bookings = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::get::Company::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.bookings#count
             * @methodOf lbServices.Company.bookings
             *
             * @description
             *
             * Counts bookings of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.bookings.count = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::count::Company::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.bookings#create
             * @methodOf lbServices.Company.bookings
             *
             * @description
             *
             * Creates a new instance in bookings of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
        R.bookings.create = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::create::Company::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.bookings#createMany
             * @methodOf lbServices.Company.bookings
             *
             * @description
             *
             * Creates a new instance in bookings of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
        R.bookings.createMany = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::createMany::Company::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.bookings#destroyAll
             * @methodOf lbServices.Company.bookings
             *
             * @description
             *
             * Deletes all bookings of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.bookings.destroyAll = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::delete::Company::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.bookings#destroyById
             * @methodOf lbServices.Company.bookings
             *
             * @description
             *
             * Delete a related item by id for bookings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bookings
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.bookings.destroyById = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::destroyById::Company::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.bookings#findById
             * @methodOf lbServices.Company.bookings
             *
             * @description
             *
             * Find a related item by id for bookings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bookings
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
        R.bookings.findById = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::findById::Company::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.bookings#updateById
             * @methodOf lbServices.Company.bookings
             *
             * @description
             *
             * Update a related item by id for bookings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bookings
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
        R.bookings.updateById = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::updateById::Company::bookings"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.categories
     * @header lbServices.Company.categories
     * @object
     * @description
     *
     * The object `Company.categories` groups methods
     * manipulating `Category` instances related to `Company`.
     *
     * Call {@link lbServices.Company#categories Company.categories()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Company#categories
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Queries categories of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R.categories = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::Company::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.categories#count
             * @methodOf lbServices.Company.categories
             *
             * @description
             *
             * Counts categories of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.categories.count = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::count::Company::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.categories#create
             * @methodOf lbServices.Company.categories
             *
             * @description
             *
             * Creates a new instance in categories of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R.categories.create = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::create::Company::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.categories#createMany
             * @methodOf lbServices.Company.categories
             *
             * @description
             *
             * Creates a new instance in categories of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R.categories.createMany = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::createMany::Company::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.categories#destroyAll
             * @methodOf lbServices.Company.categories
             *
             * @description
             *
             * Deletes all categories of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.categories.destroyAll = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::delete::Company::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.categories#destroyById
             * @methodOf lbServices.Company.categories
             *
             * @description
             *
             * Delete a related item by id for categories.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for categories
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.categories.destroyById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::destroyById::Company::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.categories#exists
             * @methodOf lbServices.Company.categories
             *
             * @description
             *
             * Check the existence of categories relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for categories
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R.categories.exists = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::exists::Company::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.categories#findById
             * @methodOf lbServices.Company.categories
             *
             * @description
             *
             * Find a related item by id for categories.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for categories
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R.categories.findById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::findById::Company::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.categories#link
             * @methodOf lbServices.Company.categories
             *
             * @description
             *
             * Add a related item by id for categories.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for categories
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R.categories.link = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::link::Company::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.categories#unlink
             * @methodOf lbServices.Company.categories
             *
             * @description
             *
             * Remove the categories relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for categories
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.categories.unlink = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::unlink::Company::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.categories#updateById
             * @methodOf lbServices.Company.categories
             *
             * @description
             *
             * Update a related item by id for categories.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for categories
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R.categories.updateById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::updateById::Company::categories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Company.clients
     * @header lbServices.Company.clients
     * @object
     * @description
     *
     * The object `Company.clients` groups methods
     * manipulating `Client` instances related to `Company`.
     *
     * Call {@link lbServices.Company#clients Company.clients()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Company#clients
             * @methodOf lbServices.Company
             *
             * @description
             *
             * Queries clients of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
        R.clients = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::get::Company::clients"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.clients#count
             * @methodOf lbServices.Company.clients
             *
             * @description
             *
             * Counts clients of Company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.clients.count = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::count::Company::clients"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.clients#create
             * @methodOf lbServices.Company.clients
             *
             * @description
             *
             * Creates a new instance in clients of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
        R.clients.create = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::create::Company::clients"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.clients#createMany
             * @methodOf lbServices.Company.clients
             *
             * @description
             *
             * Creates a new instance in clients of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
        R.clients.createMany = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::createMany::Company::clients"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.clients#destroyAll
             * @methodOf lbServices.Company.clients
             *
             * @description
             *
             * Deletes all clients of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.clients.destroyAll = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::delete::Company::clients"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.clients#destroyById
             * @methodOf lbServices.Company.clients
             *
             * @description
             *
             * Delete a related item by id for clients.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for clients
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.clients.destroyById = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::destroyById::Company::clients"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.clients#exists
             * @methodOf lbServices.Company.clients
             *
             * @description
             *
             * Check the existence of clients relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for clients
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
        R.clients.exists = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::exists::Company::clients"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.clients#findById
             * @methodOf lbServices.Company.clients
             *
             * @description
             *
             * Find a related item by id for clients.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for clients
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
        R.clients.findById = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::findById::Company::clients"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.clients#link
             * @methodOf lbServices.Company.clients
             *
             * @description
             *
             * Add a related item by id for clients.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for clients
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
        R.clients.link = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::link::Company::clients"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.clients#unlink
             * @methodOf lbServices.Company.clients
             *
             * @description
             *
             * Remove the clients relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for clients
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.clients.unlink = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::unlink::Company::clients"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Company.clients#updateById
             * @methodOf lbServices.Company.clients
             *
             * @description
             *
             * Update a related item by id for clients.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for clients
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
        R.clients.updateById = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::updateById::Company::clients"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.CompanyService
 * @header lbServices.CompanyService
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CompanyService` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "CompanyService",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/CompanyServices/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use CompanyService.company() instead.
            "prototype$__get__company": {
              url: urlBase + "/CompanyServices/:id/company",
              method: "GET",
            },

            // INTERNAL. Use CompanyService.bookings.findById() instead.
            "prototype$__findById__bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/CompanyServices/:id/bookings/:fk",
              method: "GET",
            },

            // INTERNAL. Use CompanyService.bookings.destroyById() instead.
            "prototype$__destroyById__bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/CompanyServices/:id/bookings/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use CompanyService.bookings.updateById() instead.
            "prototype$__updateById__bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/CompanyServices/:id/bookings/:fk",
              method: "PUT",
            },

            // INTERNAL. Use CompanyService.bookings() instead.
            "prototype$__get__bookings": {
              isArray: true,
              url: urlBase + "/CompanyServices/:id/bookings",
              method: "GET",
            },

            // INTERNAL. Use CompanyService.bookings.create() instead.
            "prototype$__create__bookings": {
              url: urlBase + "/CompanyServices/:id/bookings",
              method: "POST",
            },

            // INTERNAL. Use CompanyService.bookings.destroyAll() instead.
            "prototype$__delete__bookings": {
              url: urlBase + "/CompanyServices/:id/bookings",
              method: "DELETE",
            },

            // INTERNAL. Use CompanyService.bookings.count() instead.
            "prototype$__count__bookings": {
              url: urlBase + "/CompanyServices/:id/bookings/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#create
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/CompanyServices",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#createMany
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/CompanyServices",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#upsert
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/CompanyServices",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#replaceOrCreate
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/CompanyServices/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#exists
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/CompanyServices/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#findById
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/CompanyServices/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#replaceById
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/CompanyServices/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#find
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/CompanyServices",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#findOne
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/CompanyServices/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#updateAll
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/CompanyServices/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#deleteById
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/CompanyServices/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#count
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/CompanyServices/count",
              method: "GET",
            },

            // INTERNAL. Use Category.services.findById() instead.
            "::findById::Category::services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/categories/:id/services/:fk",
              method: "GET",
            },

            // INTERNAL. Use Category.services.destroyById() instead.
            "::destroyById::Category::services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/categories/:id/services/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Category.services.updateById() instead.
            "::updateById::Category::services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/categories/:id/services/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Category.services() instead.
            "::get::Category::services": {
              isArray: true,
              url: urlBase + "/categories/:id/services",
              method: "GET",
            },

            // INTERNAL. Use Category.services.create() instead.
            "::create::Category::services": {
              url: urlBase + "/categories/:id/services",
              method: "POST",
            },

            // INTERNAL. Use Category.services.createMany() instead.
            "::createMany::Category::services": {
              isArray: true,
              url: urlBase + "/categories/:id/services",
              method: "POST",
            },

            // INTERNAL. Use Category.services.destroyAll() instead.
            "::delete::Category::services": {
              url: urlBase + "/categories/:id/services",
              method: "DELETE",
            },

            // INTERNAL. Use Category.services.count() instead.
            "::count::Category::services": {
              url: urlBase + "/categories/:id/services/count",
              method: "GET",
            },

            // INTERNAL. Use Company.service.findById() instead.
            "::findById::Company::service": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/service/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.service.destroyById() instead.
            "::destroyById::Company::service": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/service/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.service.updateById() instead.
            "::updateById::Company::service": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/service/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.service() instead.
            "::get::Company::service": {
              isArray: true,
              url: urlBase + "/companies/:id/service",
              method: "GET",
            },

            // INTERNAL. Use Company.service.create() instead.
            "::create::Company::service": {
              url: urlBase + "/companies/:id/service",
              method: "POST",
            },

            // INTERNAL. Use Company.service.createMany() instead.
            "::createMany::Company::service": {
              isArray: true,
              url: urlBase + "/companies/:id/service",
              method: "POST",
            },

            // INTERNAL. Use Company.service.destroyAll() instead.
            "::delete::Company::service": {
              url: urlBase + "/companies/:id/service",
              method: "DELETE",
            },

            // INTERNAL. Use Company.service.count() instead.
            "::count::Company::service": {
              url: urlBase + "/companies/:id/service/count",
              method: "GET",
            },

            // INTERNAL. Use Booking.service() instead.
            "::get::Booking::service": {
              url: urlBase + "/bookings/:id/service",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.CompanyService#patchOrCreate
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#updateOrCreate
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#update
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#destroyById
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CompanyService#removeById
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.CompanyService#modelName
        * @propertyOf lbServices.CompanyService
        * @description
        * The name of the model represented by this $resource,
        * i.e. `CompanyService`.
        */
        R.modelName = "CompanyService";


            /**
             * @ngdoc method
             * @name lbServices.CompanyService#company
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Fetches belongsTo relation company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::CompanyService::company"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.CompanyService.bookings
     * @header lbServices.CompanyService.bookings
     * @object
     * @description
     *
     * The object `CompanyService.bookings` groups methods
     * manipulating `Booking` instances related to `CompanyService`.
     *
     * Call {@link lbServices.CompanyService#bookings CompanyService.bookings()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.CompanyService#bookings
             * @methodOf lbServices.CompanyService
             *
             * @description
             *
             * Queries bookings of CompanyService.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
        R.bookings = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::get::CompanyService::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CompanyService.bookings#count
             * @methodOf lbServices.CompanyService.bookings
             *
             * @description
             *
             * Counts bookings of CompanyService.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.bookings.count = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::count::CompanyService::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CompanyService.bookings#create
             * @methodOf lbServices.CompanyService.bookings
             *
             * @description
             *
             * Creates a new instance in bookings of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
        R.bookings.create = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::create::CompanyService::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CompanyService.bookings#createMany
             * @methodOf lbServices.CompanyService.bookings
             *
             * @description
             *
             * Creates a new instance in bookings of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
        R.bookings.createMany = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::createMany::CompanyService::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CompanyService.bookings#destroyAll
             * @methodOf lbServices.CompanyService.bookings
             *
             * @description
             *
             * Deletes all bookings of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.bookings.destroyAll = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::delete::CompanyService::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CompanyService.bookings#destroyById
             * @methodOf lbServices.CompanyService.bookings
             *
             * @description
             *
             * Delete a related item by id for bookings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bookings
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.bookings.destroyById = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::destroyById::CompanyService::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CompanyService.bookings#findById
             * @methodOf lbServices.CompanyService.bookings
             *
             * @description
             *
             * Find a related item by id for bookings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bookings
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
        R.bookings.findById = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::findById::CompanyService::bookings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CompanyService.bookings#updateById
             * @methodOf lbServices.CompanyService.bookings
             *
             * @description
             *
             * Update a related item by id for bookings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for bookings
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
        R.bookings.updateById = function() {
          var TargetResource = $injector.get("Booking");
          var action = TargetResource["::updateById::CompanyService::bookings"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.CompanyDetail
 * @header lbServices.CompanyDetail
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CompanyDetail` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "CompanyDetail",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/CompanyDetails/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#create
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyDetail` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/CompanyDetails",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#createMany
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyDetail` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/CompanyDetails",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#upsert
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyDetail` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/CompanyDetails",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#replaceOrCreate
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyDetail` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/CompanyDetails/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#exists
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/CompanyDetails/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#findById
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyDetail` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/CompanyDetails/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#replaceById
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyDetail` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/CompanyDetails/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#find
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyDetail` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/CompanyDetails",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#findOne
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyDetail` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/CompanyDetails/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#updateAll
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/CompanyDetails/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#deleteById
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyDetail` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/CompanyDetails/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#count
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/CompanyDetails/count",
              method: "GET",
            },

            // INTERNAL. Use Company.details() instead.
            "::get::Company::details": {
              url: urlBase + "/companies/:id/details",
              method: "GET",
            },

            // INTERNAL. Use Company.details.update() instead.
            "::update::Company::details": {
              url: urlBase + "/companies/:id/details",
              method: "PUT",
            },

            // INTERNAL. Use Company.details.destroy() instead.
            "::destroy::Company::details": {
              url: urlBase + "/companies/:id/details",
              method: "DELETE",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#patchOrCreate
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyDetail` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#updateOrCreate
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyDetail` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#update
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#destroyById
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyDetail` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CompanyDetail#removeById
             * @methodOf lbServices.CompanyDetail
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyDetail` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.CompanyDetail#modelName
        * @propertyOf lbServices.CompanyDetail
        * @description
        * The name of the model represented by this $resource,
        * i.e. `CompanyDetail`.
        */
        R.modelName = "CompanyDetail";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.CompanyLocation
 * @header lbServices.CompanyLocation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CompanyLocation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "CompanyLocation",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/CompanyLocations/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#create
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/CompanyLocations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#createMany
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/CompanyLocations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#upsert
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/CompanyLocations",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#replaceOrCreate
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/CompanyLocations/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#exists
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/CompanyLocations/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#findById
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/CompanyLocations/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#replaceById
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/CompanyLocations/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#find
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/CompanyLocations",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#findOne
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/CompanyLocations/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#updateAll
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/CompanyLocations/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#deleteById
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/CompanyLocations/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#count
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/CompanyLocations/count",
              method: "GET",
            },

            // INTERNAL. Use Company.location() instead.
            "::get::Company::location": {
              url: urlBase + "/companies/:id/location",
              method: "GET",
            },

            // INTERNAL. Use Company.location.create() instead.
            "::create::Company::location": {
              url: urlBase + "/companies/:id/location",
              method: "POST",
            },

            // INTERNAL. Use Company.location.createMany() instead.
            "::createMany::Company::location": {
              isArray: true,
              url: urlBase + "/companies/:id/location",
              method: "POST",
            },

            // INTERNAL. Use Company.location.update() instead.
            "::update::Company::location": {
              url: urlBase + "/companies/:id/location",
              method: "PUT",
            },

            // INTERNAL. Use Company.location.destroy() instead.
            "::destroy::Company::location": {
              url: urlBase + "/companies/:id/location",
              method: "DELETE",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#patchOrCreate
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#updateOrCreate
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#update
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#destroyById
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CompanyLocation#removeById
             * @methodOf lbServices.CompanyLocation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyLocation` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.CompanyLocation#modelName
        * @propertyOf lbServices.CompanyLocation
        * @description
        * The name of the model represented by this $resource,
        * i.e. `CompanyLocation`.
        */
        R.modelName = "CompanyLocation";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Country
 * @header lbServices.Country
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Country` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Country",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/countries/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Country.regions.findById() instead.
            "prototype$__findById__regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/countries/:id/regions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Country.regions.destroyById() instead.
            "prototype$__destroyById__regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/countries/:id/regions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Country.regions.updateById() instead.
            "prototype$__updateById__regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/countries/:id/regions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Country.regions() instead.
            "prototype$__get__regions": {
              isArray: true,
              url: urlBase + "/countries/:id/regions",
              method: "GET",
            },

            // INTERNAL. Use Country.regions.create() instead.
            "prototype$__create__regions": {
              url: urlBase + "/countries/:id/regions",
              method: "POST",
            },

            // INTERNAL. Use Country.regions.destroyAll() instead.
            "prototype$__delete__regions": {
              url: urlBase + "/countries/:id/regions",
              method: "DELETE",
            },

            // INTERNAL. Use Country.regions.count() instead.
            "prototype$__count__regions": {
              url: urlBase + "/countries/:id/regions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#create
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/countries",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#createMany
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/countries",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#upsert
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/countries",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#replaceOrCreate
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/countries/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#exists
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/countries/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#findById
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/countries/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#replaceById
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/countries/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#find
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/countries",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#findOne
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/countries/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#updateAll
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/countries/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#deleteById
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/countries/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#count
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/countries/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Country#patchOrCreate
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Country#updateOrCreate
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Country#update
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Country#destroyById
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Country#removeById
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Country#modelName
        * @propertyOf lbServices.Country
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Country`.
        */
        R.modelName = "Country";

    /**
     * @ngdoc object
     * @name lbServices.Country.regions
     * @header lbServices.Country.regions
     * @object
     * @description
     *
     * The object `Country.regions` groups methods
     * manipulating `Region` instances related to `Country`.
     *
     * Call {@link lbServices.Country#regions Country.regions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Country#regions
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Queries regions of Country.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::get::Country::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.regions#count
             * @methodOf lbServices.Country.regions
             *
             * @description
             *
             * Counts regions of Country.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.regions.count = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::count::Country::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.regions#create
             * @methodOf lbServices.Country.regions
             *
             * @description
             *
             * Creates a new instance in regions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions.create = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::create::Country::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.regions#createMany
             * @methodOf lbServices.Country.regions
             *
             * @description
             *
             * Creates a new instance in regions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions.createMany = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::createMany::Country::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.regions#destroyAll
             * @methodOf lbServices.Country.regions
             *
             * @description
             *
             * Deletes all regions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.regions.destroyAll = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::delete::Country::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.regions#destroyById
             * @methodOf lbServices.Country.regions
             *
             * @description
             *
             * Delete a related item by id for regions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for regions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.regions.destroyById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::destroyById::Country::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.regions#findById
             * @methodOf lbServices.Country.regions
             *
             * @description
             *
             * Find a related item by id for regions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for regions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions.findById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::findById::Country::regions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.regions#updateById
             * @methodOf lbServices.Country.regions
             *
             * @description
             *
             * Update a related item by id for regions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for regions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R.regions.updateById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::updateById::Country::regions"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Region
 * @header lbServices.Region
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Region` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Region",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/regions/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Region.cities.findById() instead.
            "prototype$__findById__cities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/regions/:id/cities/:fk",
              method: "GET",
            },

            // INTERNAL. Use Region.cities.destroyById() instead.
            "prototype$__destroyById__cities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/regions/:id/cities/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Region.cities.updateById() instead.
            "prototype$__updateById__cities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/regions/:id/cities/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Region.cities() instead.
            "prototype$__get__cities": {
              isArray: true,
              url: urlBase + "/regions/:id/cities",
              method: "GET",
            },

            // INTERNAL. Use Region.cities.create() instead.
            "prototype$__create__cities": {
              url: urlBase + "/regions/:id/cities",
              method: "POST",
            },

            // INTERNAL. Use Region.cities.destroyAll() instead.
            "prototype$__delete__cities": {
              url: urlBase + "/regions/:id/cities",
              method: "DELETE",
            },

            // INTERNAL. Use Region.cities.count() instead.
            "prototype$__count__cities": {
              url: urlBase + "/regions/:id/cities/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#create
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/regions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#createMany
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/regions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#upsert
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/regions",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#replaceOrCreate
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/regions/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#exists
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/regions/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#findById
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/regions/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#replaceById
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/regions/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#find
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/regions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#findOne
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/regions/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#updateAll
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/regions/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#deleteById
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/regions/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Region#count
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/regions/count",
              method: "GET",
            },

            // INTERNAL. Use Country.regions.findById() instead.
            "::findById::Country::regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/countries/:id/regions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Country.regions.destroyById() instead.
            "::destroyById::Country::regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/countries/:id/regions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Country.regions.updateById() instead.
            "::updateById::Country::regions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/countries/:id/regions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Country.regions() instead.
            "::get::Country::regions": {
              isArray: true,
              url: urlBase + "/countries/:id/regions",
              method: "GET",
            },

            // INTERNAL. Use Country.regions.create() instead.
            "::create::Country::regions": {
              url: urlBase + "/countries/:id/regions",
              method: "POST",
            },

            // INTERNAL. Use Country.regions.createMany() instead.
            "::createMany::Country::regions": {
              isArray: true,
              url: urlBase + "/countries/:id/regions",
              method: "POST",
            },

            // INTERNAL. Use Country.regions.destroyAll() instead.
            "::delete::Country::regions": {
              url: urlBase + "/countries/:id/regions",
              method: "DELETE",
            },

            // INTERNAL. Use Country.regions.count() instead.
            "::count::Country::regions": {
              url: urlBase + "/countries/:id/regions/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Region#patchOrCreate
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Region#updateOrCreate
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Region#update
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Region#destroyById
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Region#removeById
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Region` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Region#modelName
        * @propertyOf lbServices.Region
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Region`.
        */
        R.modelName = "Region";

    /**
     * @ngdoc object
     * @name lbServices.Region.cities
     * @header lbServices.Region.cities
     * @object
     * @description
     *
     * The object `Region.cities` groups methods
     * manipulating `City` instances related to `Region`.
     *
     * Call {@link lbServices.Region#cities Region.cities()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Region#cities
             * @methodOf lbServices.Region
             *
             * @description
             *
             * Queries cities of Region.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::Region::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.cities#count
             * @methodOf lbServices.Region.cities
             *
             * @description
             *
             * Counts cities of Region.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.cities.count = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::count::Region::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.cities#create
             * @methodOf lbServices.Region.cities
             *
             * @description
             *
             * Creates a new instance in cities of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities.create = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::create::Region::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.cities#createMany
             * @methodOf lbServices.Region.cities
             *
             * @description
             *
             * Creates a new instance in cities of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities.createMany = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::createMany::Region::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.cities#destroyAll
             * @methodOf lbServices.Region.cities
             *
             * @description
             *
             * Deletes all cities of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.cities.destroyAll = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::delete::Region::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.cities#destroyById
             * @methodOf lbServices.Region.cities
             *
             * @description
             *
             * Delete a related item by id for cities.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for cities
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.cities.destroyById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::destroyById::Region::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.cities#findById
             * @methodOf lbServices.Region.cities
             *
             * @description
             *
             * Find a related item by id for cities.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for cities
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities.findById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::findById::Region::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Region.cities#updateById
             * @methodOf lbServices.Region.cities
             *
             * @description
             *
             * Update a related item by id for cities.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for cities
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities.updateById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::updateById::Region::cities"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.City
 * @header lbServices.City
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `City` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "City",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/cities/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use City.districts.findById() instead.
            "prototype$__findById__districts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/districts/:fk",
              method: "GET",
            },

            // INTERNAL. Use City.districts.destroyById() instead.
            "prototype$__destroyById__districts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/districts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use City.districts.updateById() instead.
            "prototype$__updateById__districts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/districts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use City.streets.findById() instead.
            "prototype$__findById__streets": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/streets/:fk",
              method: "GET",
            },

            // INTERNAL. Use City.streets.destroyById() instead.
            "prototype$__destroyById__streets": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/streets/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use City.streets.updateById() instead.
            "prototype$__updateById__streets": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/streets/:fk",
              method: "PUT",
            },

            // INTERNAL. Use City.districts() instead.
            "prototype$__get__districts": {
              isArray: true,
              url: urlBase + "/cities/:id/districts",
              method: "GET",
            },

            // INTERNAL. Use City.districts.create() instead.
            "prototype$__create__districts": {
              url: urlBase + "/cities/:id/districts",
              method: "POST",
            },

            // INTERNAL. Use City.districts.destroyAll() instead.
            "prototype$__delete__districts": {
              url: urlBase + "/cities/:id/districts",
              method: "DELETE",
            },

            // INTERNAL. Use City.districts.count() instead.
            "prototype$__count__districts": {
              url: urlBase + "/cities/:id/districts/count",
              method: "GET",
            },

            // INTERNAL. Use City.streets() instead.
            "prototype$__get__streets": {
              isArray: true,
              url: urlBase + "/cities/:id/streets",
              method: "GET",
            },

            // INTERNAL. Use City.streets.create() instead.
            "prototype$__create__streets": {
              url: urlBase + "/cities/:id/streets",
              method: "POST",
            },

            // INTERNAL. Use City.streets.destroyAll() instead.
            "prototype$__delete__streets": {
              url: urlBase + "/cities/:id/streets",
              method: "DELETE",
            },

            // INTERNAL. Use City.streets.count() instead.
            "prototype$__count__streets": {
              url: urlBase + "/cities/:id/streets/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#create
             * @methodOf lbServices.City
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/cities",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#createMany
             * @methodOf lbServices.City
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/cities",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#upsert
             * @methodOf lbServices.City
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/cities",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#replaceOrCreate
             * @methodOf lbServices.City
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/cities/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#exists
             * @methodOf lbServices.City
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/cities/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#findById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/cities/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#replaceById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/cities/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#find
             * @methodOf lbServices.City
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/cities",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#findOne
             * @methodOf lbServices.City
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/cities/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#updateAll
             * @methodOf lbServices.City
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/cities/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#deleteById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/cities/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#count
             * @methodOf lbServices.City
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/cities/count",
              method: "GET",
            },

            // INTERNAL. Use Region.cities.findById() instead.
            "::findById::Region::cities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/regions/:id/cities/:fk",
              method: "GET",
            },

            // INTERNAL. Use Region.cities.destroyById() instead.
            "::destroyById::Region::cities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/regions/:id/cities/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Region.cities.updateById() instead.
            "::updateById::Region::cities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/regions/:id/cities/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Region.cities() instead.
            "::get::Region::cities": {
              isArray: true,
              url: urlBase + "/regions/:id/cities",
              method: "GET",
            },

            // INTERNAL. Use Region.cities.create() instead.
            "::create::Region::cities": {
              url: urlBase + "/regions/:id/cities",
              method: "POST",
            },

            // INTERNAL. Use Region.cities.createMany() instead.
            "::createMany::Region::cities": {
              isArray: true,
              url: urlBase + "/regions/:id/cities",
              method: "POST",
            },

            // INTERNAL. Use Region.cities.destroyAll() instead.
            "::delete::Region::cities": {
              url: urlBase + "/regions/:id/cities",
              method: "DELETE",
            },

            // INTERNAL. Use Region.cities.count() instead.
            "::count::Region::cities": {
              url: urlBase + "/regions/:id/cities/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.City#patchOrCreate
             * @methodOf lbServices.City
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.City#updateOrCreate
             * @methodOf lbServices.City
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.City#update
             * @methodOf lbServices.City
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.City#destroyById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.City#removeById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.City#modelName
        * @propertyOf lbServices.City
        * @description
        * The name of the model represented by this $resource,
        * i.e. `City`.
        */
        R.modelName = "City";

    /**
     * @ngdoc object
     * @name lbServices.City.districts
     * @header lbServices.City.districts
     * @object
     * @description
     *
     * The object `City.districts` groups methods
     * manipulating `District` instances related to `City`.
     *
     * Call {@link lbServices.City#districts City.districts()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.City#districts
             * @methodOf lbServices.City
             *
             * @description
             *
             * Queries districts of City.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
        R.districts = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::get::City::districts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.districts#count
             * @methodOf lbServices.City.districts
             *
             * @description
             *
             * Counts districts of City.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.districts.count = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::count::City::districts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.districts#create
             * @methodOf lbServices.City.districts
             *
             * @description
             *
             * Creates a new instance in districts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
        R.districts.create = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::create::City::districts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.districts#createMany
             * @methodOf lbServices.City.districts
             *
             * @description
             *
             * Creates a new instance in districts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
        R.districts.createMany = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::createMany::City::districts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.districts#destroyAll
             * @methodOf lbServices.City.districts
             *
             * @description
             *
             * Deletes all districts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.districts.destroyAll = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::delete::City::districts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.districts#destroyById
             * @methodOf lbServices.City.districts
             *
             * @description
             *
             * Delete a related item by id for districts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for districts
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.districts.destroyById = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::destroyById::City::districts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.districts#findById
             * @methodOf lbServices.City.districts
             *
             * @description
             *
             * Find a related item by id for districts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for districts
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
        R.districts.findById = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::findById::City::districts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.districts#updateById
             * @methodOf lbServices.City.districts
             *
             * @description
             *
             * Update a related item by id for districts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for districts
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
        R.districts.updateById = function() {
          var TargetResource = $injector.get("District");
          var action = TargetResource["::updateById::City::districts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.City.streets
     * @header lbServices.City.streets
     * @object
     * @description
     *
     * The object `City.streets` groups methods
     * manipulating `Street` instances related to `City`.
     *
     * Call {@link lbServices.City#streets City.streets()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.City#streets
             * @methodOf lbServices.City
             *
             * @description
             *
             * Queries streets of City.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
        R.streets = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::get::City::streets"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.streets#count
             * @methodOf lbServices.City.streets
             *
             * @description
             *
             * Counts streets of City.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.streets.count = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::count::City::streets"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.streets#create
             * @methodOf lbServices.City.streets
             *
             * @description
             *
             * Creates a new instance in streets of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
        R.streets.create = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::create::City::streets"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.streets#createMany
             * @methodOf lbServices.City.streets
             *
             * @description
             *
             * Creates a new instance in streets of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
        R.streets.createMany = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::createMany::City::streets"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.streets#destroyAll
             * @methodOf lbServices.City.streets
             *
             * @description
             *
             * Deletes all streets of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.streets.destroyAll = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::delete::City::streets"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.streets#destroyById
             * @methodOf lbServices.City.streets
             *
             * @description
             *
             * Delete a related item by id for streets.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for streets
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.streets.destroyById = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::destroyById::City::streets"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.streets#findById
             * @methodOf lbServices.City.streets
             *
             * @description
             *
             * Find a related item by id for streets.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for streets
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
        R.streets.findById = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::findById::City::streets"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.streets#updateById
             * @methodOf lbServices.City.streets
             *
             * @description
             *
             * Update a related item by id for streets.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for streets
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
        R.streets.updateById = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::updateById::City::streets"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.District
 * @header lbServices.District
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `District` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "District",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/districts/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use District.streets.findById() instead.
            "prototype$__findById__streets": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/districts/:id/streets/:fk",
              method: "GET",
            },

            // INTERNAL. Use District.streets.destroyById() instead.
            "prototype$__destroyById__streets": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/districts/:id/streets/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use District.streets.updateById() instead.
            "prototype$__updateById__streets": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/districts/:id/streets/:fk",
              method: "PUT",
            },

            // INTERNAL. Use District.streets() instead.
            "prototype$__get__streets": {
              isArray: true,
              url: urlBase + "/districts/:id/streets",
              method: "GET",
            },

            // INTERNAL. Use District.streets.create() instead.
            "prototype$__create__streets": {
              url: urlBase + "/districts/:id/streets",
              method: "POST",
            },

            // INTERNAL. Use District.streets.destroyAll() instead.
            "prototype$__delete__streets": {
              url: urlBase + "/districts/:id/streets",
              method: "DELETE",
            },

            // INTERNAL. Use District.streets.count() instead.
            "prototype$__count__streets": {
              url: urlBase + "/districts/:id/streets/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.District#create
             * @methodOf lbServices.District
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/districts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.District#createMany
             * @methodOf lbServices.District
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/districts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.District#upsert
             * @methodOf lbServices.District
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/districts",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.District#replaceOrCreate
             * @methodOf lbServices.District
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/districts/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.District#exists
             * @methodOf lbServices.District
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/districts/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.District#findById
             * @methodOf lbServices.District
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/districts/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.District#replaceById
             * @methodOf lbServices.District
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/districts/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.District#find
             * @methodOf lbServices.District
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/districts",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.District#findOne
             * @methodOf lbServices.District
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/districts/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.District#updateAll
             * @methodOf lbServices.District
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/districts/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.District#deleteById
             * @methodOf lbServices.District
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/districts/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.District#count
             * @methodOf lbServices.District
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/districts/count",
              method: "GET",
            },

            // INTERNAL. Use City.districts.findById() instead.
            "::findById::City::districts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/districts/:fk",
              method: "GET",
            },

            // INTERNAL. Use City.districts.destroyById() instead.
            "::destroyById::City::districts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/districts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use City.districts.updateById() instead.
            "::updateById::City::districts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/districts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use City.districts() instead.
            "::get::City::districts": {
              isArray: true,
              url: urlBase + "/cities/:id/districts",
              method: "GET",
            },

            // INTERNAL. Use City.districts.create() instead.
            "::create::City::districts": {
              url: urlBase + "/cities/:id/districts",
              method: "POST",
            },

            // INTERNAL. Use City.districts.createMany() instead.
            "::createMany::City::districts": {
              isArray: true,
              url: urlBase + "/cities/:id/districts",
              method: "POST",
            },

            // INTERNAL. Use City.districts.destroyAll() instead.
            "::delete::City::districts": {
              url: urlBase + "/cities/:id/districts",
              method: "DELETE",
            },

            // INTERNAL. Use City.districts.count() instead.
            "::count::City::districts": {
              url: urlBase + "/cities/:id/districts/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.District#patchOrCreate
             * @methodOf lbServices.District
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.District#updateOrCreate
             * @methodOf lbServices.District
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.District#update
             * @methodOf lbServices.District
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.District#destroyById
             * @methodOf lbServices.District
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.District#removeById
             * @methodOf lbServices.District
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `District` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.District#modelName
        * @propertyOf lbServices.District
        * @description
        * The name of the model represented by this $resource,
        * i.e. `District`.
        */
        R.modelName = "District";

    /**
     * @ngdoc object
     * @name lbServices.District.streets
     * @header lbServices.District.streets
     * @object
     * @description
     *
     * The object `District.streets` groups methods
     * manipulating `Street` instances related to `District`.
     *
     * Call {@link lbServices.District#streets District.streets()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.District#streets
             * @methodOf lbServices.District
             *
             * @description
             *
             * Queries streets of District.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
        R.streets = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::get::District::streets"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.District.streets#count
             * @methodOf lbServices.District.streets
             *
             * @description
             *
             * Counts streets of District.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.streets.count = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::count::District::streets"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.District.streets#create
             * @methodOf lbServices.District.streets
             *
             * @description
             *
             * Creates a new instance in streets of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
        R.streets.create = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::create::District::streets"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.District.streets#createMany
             * @methodOf lbServices.District.streets
             *
             * @description
             *
             * Creates a new instance in streets of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
        R.streets.createMany = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::createMany::District::streets"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.District.streets#destroyAll
             * @methodOf lbServices.District.streets
             *
             * @description
             *
             * Deletes all streets of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.streets.destroyAll = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::delete::District::streets"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.District.streets#destroyById
             * @methodOf lbServices.District.streets
             *
             * @description
             *
             * Delete a related item by id for streets.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for streets
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.streets.destroyById = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::destroyById::District::streets"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.District.streets#findById
             * @methodOf lbServices.District.streets
             *
             * @description
             *
             * Find a related item by id for streets.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for streets
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
        R.streets.findById = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::findById::District::streets"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.District.streets#updateById
             * @methodOf lbServices.District.streets
             *
             * @description
             *
             * Update a related item by id for streets.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for streets
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
        R.streets.updateById = function() {
          var TargetResource = $injector.get("Street");
          var action = TargetResource["::updateById::District::streets"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.StreetType
 * @header lbServices.StreetType
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `StreetType` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "StreetType",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/streetTypes/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.StreetType#create
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StreetType` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/streetTypes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.StreetType#createMany
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StreetType` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/streetTypes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.StreetType#upsert
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StreetType` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/streetTypes",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.StreetType#replaceOrCreate
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StreetType` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/streetTypes/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.StreetType#exists
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/streetTypes/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.StreetType#findById
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StreetType` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/streetTypes/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.StreetType#replaceById
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StreetType` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/streetTypes/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.StreetType#find
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StreetType` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/streetTypes",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.StreetType#findOne
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StreetType` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/streetTypes/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.StreetType#updateAll
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/streetTypes/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.StreetType#deleteById
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StreetType` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/streetTypes/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.StreetType#count
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/streetTypes/count",
              method: "GET",
            },

            // INTERNAL. Use Street.streetType() instead.
            "::get::Street::streetType": {
              url: urlBase + "/streets/:id/streetType",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.StreetType#patchOrCreate
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StreetType` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.StreetType#updateOrCreate
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StreetType` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.StreetType#update
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.StreetType#destroyById
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StreetType` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.StreetType#removeById
             * @methodOf lbServices.StreetType
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StreetType` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.StreetType#modelName
        * @propertyOf lbServices.StreetType
        * @description
        * The name of the model represented by this $resource,
        * i.e. `StreetType`.
        */
        R.modelName = "StreetType";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Street
 * @header lbServices.Street
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Street` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Street",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/streets/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Street.streetType() instead.
            "prototype$__get__streetType": {
              url: urlBase + "/streets/:id/streetType",
              method: "GET",
            },

            // INTERNAL. Use Street.buildings.findById() instead.
            "prototype$__findById__buildings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/streets/:id/buildings/:fk",
              method: "GET",
            },

            // INTERNAL. Use Street.buildings.destroyById() instead.
            "prototype$__destroyById__buildings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/streets/:id/buildings/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Street.buildings.updateById() instead.
            "prototype$__updateById__buildings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/streets/:id/buildings/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Street.buildings() instead.
            "prototype$__get__buildings": {
              isArray: true,
              url: urlBase + "/streets/:id/buildings",
              method: "GET",
            },

            // INTERNAL. Use Street.buildings.create() instead.
            "prototype$__create__buildings": {
              url: urlBase + "/streets/:id/buildings",
              method: "POST",
            },

            // INTERNAL. Use Street.buildings.destroyAll() instead.
            "prototype$__delete__buildings": {
              url: urlBase + "/streets/:id/buildings",
              method: "DELETE",
            },

            // INTERNAL. Use Street.buildings.count() instead.
            "prototype$__count__buildings": {
              url: urlBase + "/streets/:id/buildings/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Street#create
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/streets",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Street#createMany
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/streets",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Street#upsert
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/streets",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Street#replaceOrCreate
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/streets/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Street#exists
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/streets/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Street#findById
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/streets/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Street#replaceById
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/streets/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Street#find
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/streets",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Street#findOne
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/streets/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Street#updateAll
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/streets/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Street#deleteById
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/streets/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Street#count
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/streets/count",
              method: "GET",
            },

            // INTERNAL. Use City.streets.findById() instead.
            "::findById::City::streets": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/streets/:fk",
              method: "GET",
            },

            // INTERNAL. Use City.streets.destroyById() instead.
            "::destroyById::City::streets": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/streets/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use City.streets.updateById() instead.
            "::updateById::City::streets": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/streets/:fk",
              method: "PUT",
            },

            // INTERNAL. Use City.streets() instead.
            "::get::City::streets": {
              isArray: true,
              url: urlBase + "/cities/:id/streets",
              method: "GET",
            },

            // INTERNAL. Use City.streets.create() instead.
            "::create::City::streets": {
              url: urlBase + "/cities/:id/streets",
              method: "POST",
            },

            // INTERNAL. Use City.streets.createMany() instead.
            "::createMany::City::streets": {
              isArray: true,
              url: urlBase + "/cities/:id/streets",
              method: "POST",
            },

            // INTERNAL. Use City.streets.destroyAll() instead.
            "::delete::City::streets": {
              url: urlBase + "/cities/:id/streets",
              method: "DELETE",
            },

            // INTERNAL. Use City.streets.count() instead.
            "::count::City::streets": {
              url: urlBase + "/cities/:id/streets/count",
              method: "GET",
            },

            // INTERNAL. Use District.streets.findById() instead.
            "::findById::District::streets": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/districts/:id/streets/:fk",
              method: "GET",
            },

            // INTERNAL. Use District.streets.destroyById() instead.
            "::destroyById::District::streets": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/districts/:id/streets/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use District.streets.updateById() instead.
            "::updateById::District::streets": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/districts/:id/streets/:fk",
              method: "PUT",
            },

            // INTERNAL. Use District.streets() instead.
            "::get::District::streets": {
              isArray: true,
              url: urlBase + "/districts/:id/streets",
              method: "GET",
            },

            // INTERNAL. Use District.streets.create() instead.
            "::create::District::streets": {
              url: urlBase + "/districts/:id/streets",
              method: "POST",
            },

            // INTERNAL. Use District.streets.createMany() instead.
            "::createMany::District::streets": {
              isArray: true,
              url: urlBase + "/districts/:id/streets",
              method: "POST",
            },

            // INTERNAL. Use District.streets.destroyAll() instead.
            "::delete::District::streets": {
              url: urlBase + "/districts/:id/streets",
              method: "DELETE",
            },

            // INTERNAL. Use District.streets.count() instead.
            "::count::District::streets": {
              url: urlBase + "/districts/:id/streets/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Street#patchOrCreate
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Street#updateOrCreate
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Street#update
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Street#destroyById
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Street#removeById
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Street` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Street#modelName
        * @propertyOf lbServices.Street
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Street`.
        */
        R.modelName = "Street";


            /**
             * @ngdoc method
             * @name lbServices.Street#streetType
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Fetches belongsTo relation streetType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `StreetType` object.)
             * </em>
             */
        R.streetType = function() {
          var TargetResource = $injector.get("StreetType");
          var action = TargetResource["::get::Street::streetType"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Street.buildings
     * @header lbServices.Street.buildings
     * @object
     * @description
     *
     * The object `Street.buildings` groups methods
     * manipulating `Building` instances related to `Street`.
     *
     * Call {@link lbServices.Street#buildings Street.buildings()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Street#buildings
             * @methodOf lbServices.Street
             *
             * @description
             *
             * Queries buildings of Street.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
        R.buildings = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::get::Street::buildings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Street.buildings#count
             * @methodOf lbServices.Street.buildings
             *
             * @description
             *
             * Counts buildings of Street.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.buildings.count = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::count::Street::buildings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Street.buildings#create
             * @methodOf lbServices.Street.buildings
             *
             * @description
             *
             * Creates a new instance in buildings of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
        R.buildings.create = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::create::Street::buildings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Street.buildings#createMany
             * @methodOf lbServices.Street.buildings
             *
             * @description
             *
             * Creates a new instance in buildings of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
        R.buildings.createMany = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::createMany::Street::buildings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Street.buildings#destroyAll
             * @methodOf lbServices.Street.buildings
             *
             * @description
             *
             * Deletes all buildings of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.buildings.destroyAll = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::delete::Street::buildings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Street.buildings#destroyById
             * @methodOf lbServices.Street.buildings
             *
             * @description
             *
             * Delete a related item by id for buildings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for buildings
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.buildings.destroyById = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::destroyById::Street::buildings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Street.buildings#findById
             * @methodOf lbServices.Street.buildings
             *
             * @description
             *
             * Find a related item by id for buildings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for buildings
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
        R.buildings.findById = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::findById::Street::buildings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Street.buildings#updateById
             * @methodOf lbServices.Street.buildings
             *
             * @description
             *
             * Update a related item by id for buildings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for buildings
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
        R.buildings.updateById = function() {
          var TargetResource = $injector.get("Building");
          var action = TargetResource["::updateById::Street::buildings"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Building
 * @header lbServices.Building
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Building` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Building",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/buildings/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Building#create
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/buildings",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Building#createMany
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/buildings",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Building#upsert
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/buildings",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Building#replaceOrCreate
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/buildings/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Building#exists
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/buildings/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Building#findById
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/buildings/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Building#replaceById
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/buildings/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Building#find
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/buildings",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Building#findOne
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/buildings/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Building#updateAll
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/buildings/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Building#deleteById
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/buildings/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Building#count
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/buildings/count",
              method: "GET",
            },

            // INTERNAL. Use Street.buildings.findById() instead.
            "::findById::Street::buildings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/streets/:id/buildings/:fk",
              method: "GET",
            },

            // INTERNAL. Use Street.buildings.destroyById() instead.
            "::destroyById::Street::buildings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/streets/:id/buildings/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Street.buildings.updateById() instead.
            "::updateById::Street::buildings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/streets/:id/buildings/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Street.buildings() instead.
            "::get::Street::buildings": {
              isArray: true,
              url: urlBase + "/streets/:id/buildings",
              method: "GET",
            },

            // INTERNAL. Use Street.buildings.create() instead.
            "::create::Street::buildings": {
              url: urlBase + "/streets/:id/buildings",
              method: "POST",
            },

            // INTERNAL. Use Street.buildings.createMany() instead.
            "::createMany::Street::buildings": {
              isArray: true,
              url: urlBase + "/streets/:id/buildings",
              method: "POST",
            },

            // INTERNAL. Use Street.buildings.destroyAll() instead.
            "::delete::Street::buildings": {
              url: urlBase + "/streets/:id/buildings",
              method: "DELETE",
            },

            // INTERNAL. Use Street.buildings.count() instead.
            "::count::Street::buildings": {
              url: urlBase + "/streets/:id/buildings/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Building#patchOrCreate
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Building#updateOrCreate
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Building#update
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Building#destroyById
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Building#removeById
             * @methodOf lbServices.Building
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Building` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Building#modelName
        * @propertyOf lbServices.Building
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Building`.
        */
        R.modelName = "Building";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Booking
 * @header lbServices.Booking
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Booking` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Booking",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/bookings/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Booking.company() instead.
            "prototype$__get__company": {
              url: urlBase + "/bookings/:id/company",
              method: "GET",
            },

            // INTERNAL. Use Booking.service() instead.
            "prototype$__get__service": {
              url: urlBase + "/bookings/:id/service",
              method: "GET",
            },

            // INTERNAL. Use Booking.user() instead.
            "prototype$__get__user": {
              url: urlBase + "/bookings/:id/user",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Booking#create
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/bookings",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Booking#createMany
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/bookings",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Booking#upsert
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/bookings",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Booking#replaceOrCreate
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/bookings/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Booking#exists
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/bookings/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Booking#findById
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/bookings/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Booking#replaceById
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/bookings/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Booking#find
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/bookings",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Booking#findOne
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/bookings/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Booking#updateAll
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/bookings/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Booking#deleteById
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/bookings/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Booking#count
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/bookings/count",
              method: "GET",
            },

            // INTERNAL. Use Company.bookings.findById() instead.
            "::findById::Company::bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/bookings/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.bookings.destroyById() instead.
            "::destroyById::Company::bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/bookings/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.bookings.updateById() instead.
            "::updateById::Company::bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/bookings/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.bookings() instead.
            "::get::Company::bookings": {
              isArray: true,
              url: urlBase + "/companies/:id/bookings",
              method: "GET",
            },

            // INTERNAL. Use Company.bookings.create() instead.
            "::create::Company::bookings": {
              url: urlBase + "/companies/:id/bookings",
              method: "POST",
            },

            // INTERNAL. Use Company.bookings.createMany() instead.
            "::createMany::Company::bookings": {
              isArray: true,
              url: urlBase + "/companies/:id/bookings",
              method: "POST",
            },

            // INTERNAL. Use Company.bookings.destroyAll() instead.
            "::delete::Company::bookings": {
              url: urlBase + "/companies/:id/bookings",
              method: "DELETE",
            },

            // INTERNAL. Use Company.bookings.count() instead.
            "::count::Company::bookings": {
              url: urlBase + "/companies/:id/bookings/count",
              method: "GET",
            },

            // INTERNAL. Use CompanyService.bookings.findById() instead.
            "::findById::CompanyService::bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/CompanyServices/:id/bookings/:fk",
              method: "GET",
            },

            // INTERNAL. Use CompanyService.bookings.destroyById() instead.
            "::destroyById::CompanyService::bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/CompanyServices/:id/bookings/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use CompanyService.bookings.updateById() instead.
            "::updateById::CompanyService::bookings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/CompanyServices/:id/bookings/:fk",
              method: "PUT",
            },

            // INTERNAL. Use CompanyService.bookings() instead.
            "::get::CompanyService::bookings": {
              isArray: true,
              url: urlBase + "/CompanyServices/:id/bookings",
              method: "GET",
            },

            // INTERNAL. Use CompanyService.bookings.create() instead.
            "::create::CompanyService::bookings": {
              url: urlBase + "/CompanyServices/:id/bookings",
              method: "POST",
            },

            // INTERNAL. Use CompanyService.bookings.createMany() instead.
            "::createMany::CompanyService::bookings": {
              isArray: true,
              url: urlBase + "/CompanyServices/:id/bookings",
              method: "POST",
            },

            // INTERNAL. Use CompanyService.bookings.destroyAll() instead.
            "::delete::CompanyService::bookings": {
              url: urlBase + "/CompanyServices/:id/bookings",
              method: "DELETE",
            },

            // INTERNAL. Use CompanyService.bookings.count() instead.
            "::count::CompanyService::bookings": {
              url: urlBase + "/CompanyServices/:id/bookings/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Booking#patchOrCreate
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Booking#updateOrCreate
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Booking#update
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Booking#destroyById
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Booking#removeById
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Booking#modelName
        * @propertyOf lbServices.Booking
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Booking`.
        */
        R.modelName = "Booking";


            /**
             * @ngdoc method
             * @name lbServices.Booking#company
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Fetches belongsTo relation company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::Booking::company"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Booking#service
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Fetches belongsTo relation service.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyService` object.)
             * </em>
             */
        R.service = function() {
          var TargetResource = $injector.get("CompanyService");
          var action = TargetResource["::get::Booking::service"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Booking#user
             * @methodOf lbServices.Booking
             *
             * @description
             *
             * Fetches belongsTo relation user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
        R.user = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::get::Booking::user"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.CategoryCompany
 * @header lbServices.CategoryCompany
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CategoryCompany` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "CategoryCompany",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/CategoryCompanies/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use CategoryCompany.category() instead.
            "prototype$__get__category": {
              url: urlBase + "/CategoryCompanies/:id/category",
              method: "GET",
            },

            // INTERNAL. Use CategoryCompany.company() instead.
            "prototype$__get__company": {
              url: urlBase + "/CategoryCompanies/:id/company",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#create
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CategoryCompany` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/CategoryCompanies",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#createMany
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CategoryCompany` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/CategoryCompanies",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#upsert
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CategoryCompany` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/CategoryCompanies",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#replaceOrCreate
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CategoryCompany` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/CategoryCompanies/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#exists
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/CategoryCompanies/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#findById
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CategoryCompany` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/CategoryCompanies/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#replaceById
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CategoryCompany` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/CategoryCompanies/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#find
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CategoryCompany` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/CategoryCompanies",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#findOne
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CategoryCompany` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/CategoryCompanies/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#updateAll
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/CategoryCompanies/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#deleteById
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CategoryCompany` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/CategoryCompanies/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#count
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/CategoryCompanies/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#patchOrCreate
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CategoryCompany` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#updateOrCreate
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CategoryCompany` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#update
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#destroyById
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CategoryCompany` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#removeById
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CategoryCompany` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.CategoryCompany#modelName
        * @propertyOf lbServices.CategoryCompany
        * @description
        * The name of the model represented by this $resource,
        * i.e. `CategoryCompany`.
        */
        R.modelName = "CategoryCompany";


            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#category
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Fetches belongsTo relation category.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R.category = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::CategoryCompany::category"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.CategoryCompany#company
             * @methodOf lbServices.CategoryCompany
             *
             * @description
             *
             * Fetches belongsTo relation company.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.company = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::CategoryCompany::company"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Notify
 * @header lbServices.Notify
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Notify` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Notify",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/notifies/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Notify.client() instead.
            "prototype$__get__client": {
              url: urlBase + "/notifies/:id/client",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Notify#create
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Notify` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/notifies",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Notify#createMany
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Notify` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/notifies",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Notify#upsert
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Notify` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/notifies",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Notify#replaceOrCreate
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Notify` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/notifies/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Notify#exists
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/notifies/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Notify#findById
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Notify` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/notifies/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Notify#replaceById
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Notify` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/notifies/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Notify#find
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Notify` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/notifies",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Notify#findOne
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Notify` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/notifies/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Notify#updateAll
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/notifies/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Notify#deleteById
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Notify` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/notifies/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Notify#count
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/notifies/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Notify#patchOrCreate
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Notify` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Notify#updateOrCreate
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Notify` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Notify#update
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Notify#destroyById
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Notify` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Notify#removeById
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Notify` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Notify#modelName
        * @propertyOf lbServices.Notify
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Notify`.
        */
        R.modelName = "Notify";


            /**
             * @ngdoc method
             * @name lbServices.Notify#client
             * @methodOf lbServices.Notify
             *
             * @description
             *
             * Fetches belongsTo relation client.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
        R.client = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::get::Notify::client"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Logs
 * @header lbServices.Logs
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Logs` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Logs",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/logs/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Logs#create
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Logs` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/logs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Logs#createMany
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Logs` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/logs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Logs#upsert
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Logs` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/logs",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Logs#replaceOrCreate
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Logs` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/logs/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Logs#exists
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/logs/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Logs#findById
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Logs` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/logs/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Logs#replaceById
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Logs` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/logs/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Logs#find
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Logs` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/logs",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Logs#findOne
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Logs` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/logs/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Logs#updateAll
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/logs/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Logs#deleteById
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Logs` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/logs/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Logs#count
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/logs/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Logs#prototype$updateAttributes
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Logs` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/logs/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Logs#createChangeStream
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/logs/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Logs#patchOrCreate
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Logs` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Logs#updateOrCreate
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Logs` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Logs#update
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Logs#destroyById
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Logs` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Logs#removeById
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Logs` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Logs#patchAttributes
             * @methodOf lbServices.Logs
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Logs` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Logs#modelName
        * @propertyOf lbServices.Logs
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Logs`.
        */
        R.modelName = "Logs";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.SmsLogs
 * @header lbServices.SmsLogs
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SmsLogs` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "SmsLogs",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/smsLogs/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use SmsLogs.client() instead.
            "prototype$__get__client": {
              url: urlBase + "/smsLogs/:id/client",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#create
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SmsLogs` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/smsLogs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#createMany
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SmsLogs` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/smsLogs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#upsert
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SmsLogs` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/smsLogs",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#replaceOrCreate
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SmsLogs` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/smsLogs/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#exists
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/smsLogs/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#findById
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SmsLogs` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/smsLogs/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#replaceById
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SmsLogs` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/smsLogs/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#find
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SmsLogs` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/smsLogs",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#findOne
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SmsLogs` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/smsLogs/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#updateAll
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/smsLogs/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#deleteById
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SmsLogs` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/smsLogs/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#count
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/smsLogs/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#prototype$updateAttributes
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SmsLogs` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/smsLogs/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#createChangeStream
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/smsLogs/change-stream",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#patchOrCreate
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SmsLogs` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#updateOrCreate
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SmsLogs` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#update
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#destroyById
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SmsLogs` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#removeById
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SmsLogs` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#patchAttributes
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `SmsLogs` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.SmsLogs#modelName
        * @propertyOf lbServices.SmsLogs
        * @description
        * The name of the model represented by this $resource,
        * i.e. `SmsLogs`.
        */
        R.modelName = "SmsLogs";


            /**
             * @ngdoc method
             * @name lbServices.SmsLogs#client
             * @methodOf lbServices.SmsLogs
             *
             * @description
             *
             * Fetches belongsTo relation client.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
        R.client = function() {
          var TargetResource = $injector.get("Client");
          var action = TargetResource["::get::SmsLogs::client"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Container
 * @header lbServices.Container
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Container` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Container",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Containers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Container#getContainers
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getContainers": {
              isArray: true,
              url: urlBase + "/Containers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#createContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "createContainer": {
              url: urlBase + "/Containers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#destroyContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `` – `{undefined=}` -
             */
            "destroyContainer": {
              url: urlBase + "/Containers/:container",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getContainer": {
              url: urlBase + "/Containers/:container",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getFiles
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getFiles": {
              isArray: true,
              url: urlBase + "/Containers/:container/files",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getFile
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getFile": {
              url: urlBase + "/Containers/:container/files/:file",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#removeFile
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `` – `{undefined=}` -
             */
            "removeFile": {
              url: urlBase + "/Containers/:container/files/:file",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#upload
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `result` – `{object=}` -
             */
            "upload": {
              url: urlBase + "/Containers/:container/upload",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#download
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "download": {
              url: urlBase + "/Containers/:container/download/:file",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Container#modelName
        * @propertyOf lbServices.Container
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Container`.
        */
        R.modelName = "Container";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Client
 * @header lbServices.Client
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Client` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Client",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/clients/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Client.companies.findById() instead.
            "prototype$__findById__companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/clients/:id/companies/:fk",
              method: "GET",
            },

            // INTERNAL. Use Client.companies.destroyById() instead.
            "prototype$__destroyById__companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/clients/:id/companies/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Client.companies.updateById() instead.
            "prototype$__updateById__companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/clients/:id/companies/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Client.companies.link() instead.
            "prototype$__link__companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/clients/:id/companies/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Client.companies.unlink() instead.
            "prototype$__unlink__companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/clients/:id/companies/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Client.companies.exists() instead.
            "prototype$__exists__companies": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/clients/:id/companies/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Client.companies() instead.
            "prototype$__get__companies": {
              isArray: true,
              url: urlBase + "/clients/:id/companies",
              method: "GET",
            },

            // INTERNAL. Use Client.companies.create() instead.
            "prototype$__create__companies": {
              url: urlBase + "/clients/:id/companies",
              method: "POST",
            },

            // INTERNAL. Use Client.companies.destroyAll() instead.
            "prototype$__delete__companies": {
              url: urlBase + "/clients/:id/companies",
              method: "DELETE",
            },

            // INTERNAL. Use Client.companies.count() instead.
            "prototype$__count__companies": {
              url: urlBase + "/clients/:id/companies/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Client#create
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/clients",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Client#createMany
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/clients",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Client#upsert
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/clients",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Client#replaceOrCreate
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/clients/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Client#exists
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/clients/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Client#findById
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/clients/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Client#replaceById
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/clients/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Client#find
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/clients",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Client#findOne
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/clients/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Client#updateAll
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/clients/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Client#deleteById
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/clients/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Client#count
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/clients/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Client#login
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/clients/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Client#logout
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/clients/logout",
              method: "POST",
            },

            // INTERNAL. Use Company.clients.findById() instead.
            "::findById::Company::clients": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/clients/:fk",
              method: "GET",
            },

            // INTERNAL. Use Company.clients.destroyById() instead.
            "::destroyById::Company::clients": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/clients/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.clients.updateById() instead.
            "::updateById::Company::clients": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/clients/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.clients.link() instead.
            "::link::Company::clients": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/clients/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Company.clients.unlink() instead.
            "::unlink::Company::clients": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/clients/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Company.clients.exists() instead.
            "::exists::Company::clients": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/companies/:id/clients/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Company.clients() instead.
            "::get::Company::clients": {
              isArray: true,
              url: urlBase + "/companies/:id/clients",
              method: "GET",
            },

            // INTERNAL. Use Company.clients.create() instead.
            "::create::Company::clients": {
              url: urlBase + "/companies/:id/clients",
              method: "POST",
            },

            // INTERNAL. Use Company.clients.createMany() instead.
            "::createMany::Company::clients": {
              isArray: true,
              url: urlBase + "/companies/:id/clients",
              method: "POST",
            },

            // INTERNAL. Use Company.clients.destroyAll() instead.
            "::delete::Company::clients": {
              url: urlBase + "/companies/:id/clients",
              method: "DELETE",
            },

            // INTERNAL. Use Company.clients.count() instead.
            "::count::Company::clients": {
              url: urlBase + "/companies/:id/clients/count",
              method: "GET",
            },

            // INTERNAL. Use Booking.user() instead.
            "::get::Booking::user": {
              url: urlBase + "/bookings/:id/user",
              method: "GET",
            },

            // INTERNAL. Use Notify.client() instead.
            "::get::Notify::client": {
              url: urlBase + "/notifies/:id/client",
              method: "GET",
            },

            // INTERNAL. Use SmsLogs.client() instead.
            "::get::SmsLogs::client": {
              url: urlBase + "/smsLogs/:id/client",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Client#getCurrent
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/clients" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Client#patchOrCreate
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Client#updateOrCreate
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Client#update
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Client#destroyById
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Client#removeById
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Client` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Client#getCachedCurrent
         * @methodOf lbServices.Client
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Client#login} or
         * {@link lbServices.Client#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Client instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Client#isAuthenticated
         * @methodOf lbServices.Client
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Client#getCurrentId
         * @methodOf lbServices.Client
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Client#modelName
        * @propertyOf lbServices.Client
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Client`.
        */
        R.modelName = "Client";

    /**
     * @ngdoc object
     * @name lbServices.Client.companies
     * @header lbServices.Client.companies
     * @object
     * @description
     *
     * The object `Client.companies` groups methods
     * manipulating `Company` instances related to `Client`.
     *
     * Call {@link lbServices.Client#companies Client.companies()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Client#companies
             * @methodOf lbServices.Client
             *
             * @description
             *
             * Queries companies of Client.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.companies = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::get::Client::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Client.companies#count
             * @methodOf lbServices.Client.companies
             *
             * @description
             *
             * Counts companies of Client.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.companies.count = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::count::Client::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Client.companies#create
             * @methodOf lbServices.Client.companies
             *
             * @description
             *
             * Creates a new instance in companies of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.companies.create = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::create::Client::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Client.companies#createMany
             * @methodOf lbServices.Client.companies
             *
             * @description
             *
             * Creates a new instance in companies of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.companies.createMany = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::createMany::Client::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Client.companies#destroyAll
             * @methodOf lbServices.Client.companies
             *
             * @description
             *
             * Deletes all companies of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.companies.destroyAll = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::delete::Client::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Client.companies#destroyById
             * @methodOf lbServices.Client.companies
             *
             * @description
             *
             * Delete a related item by id for companies.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for companies
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.companies.destroyById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::destroyById::Client::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Client.companies#exists
             * @methodOf lbServices.Client.companies
             *
             * @description
             *
             * Check the existence of companies relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for companies
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.companies.exists = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::exists::Client::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Client.companies#findById
             * @methodOf lbServices.Client.companies
             *
             * @description
             *
             * Find a related item by id for companies.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for companies
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.companies.findById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::findById::Client::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Client.companies#link
             * @methodOf lbServices.Client.companies
             *
             * @description
             *
             * Add a related item by id for companies.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for companies
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.companies.link = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::link::Client::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Client.companies#unlink
             * @methodOf lbServices.Client.companies
             *
             * @description
             *
             * Remove the companies relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for companies
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.companies.unlink = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::unlink::Client::companies"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Client.companies#updateById
             * @methodOf lbServices.Client.companies
             *
             * @description
             *
             * Update a related item by id for companies.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for companies
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Company` object.)
             * </em>
             */
        R.companies.updateById = function() {
          var TargetResource = $injector.get("Company");
          var action = TargetResource["::updateById::Client::companies"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Core
 * @header lbServices.Core
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Core` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Core",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/core/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Core#run
             * @methodOf lbServices.Core
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `path` – `{string=}` -
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Core` object.)
             * </em>
             */
            "run": {
              url: urlBase + "/core/run/:path",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Core#invoke
             * @methodOf lbServices.Core
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "invoke": {
              url: urlBase + "/core/invoke",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Core#phoneVerification
             * @methodOf lbServices.Core
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `phone` – `{string}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `result` – `{object=}` -
             */
            "phoneVerification": {
              url: urlBase + "/core/phoneVerification",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Core#phoneVerificationConfirm
             * @methodOf lbServices.Core
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `code` – `{string}` -
             *
             *  - `smsId` – `{string}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `result` – `{object=}` -
             */
            "phoneVerificationConfirm": {
              url: urlBase + "/core/phoneVerificationConfirm",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Core#smsStatus
             * @methodOf lbServices.Core
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{string}` -
             *
             *  - `phone` – `{string}` -
             *
             *  - `status` – `{string}` -
             *
             *  - `time` – `{string=}` -
             *
             *  - `ts` – `{string=}` -
             *
             *  - `err` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `result` – `{object=}` -
             */
            "smsStatus": {
              url: urlBase + "/core/smsStatus",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Core#notify
             * @methodOf lbServices.Core
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `name` – `{string}` -
             *
             *  - `type` – `{string}` -
             *
             *  - `process` – `{string}` -
             *
             *  - `data` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `result` – `{object=}` -
             */
            "notify": {
              url: urlBase + "/core/notify",
              method: "POST",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Core#modelName
        * @propertyOf lbServices.Core
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Core`.
        */
        R.modelName = "Core";



        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
