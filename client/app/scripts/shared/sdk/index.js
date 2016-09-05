/**
* @module SDK Index
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MTI 2016 Jonathan Casarrubias
* @description
* The SDK Index is automatically built by the LoopBack SDK Builder.
*
* The SDK Index will temporally keep providing access to everything in the SDK
* including services. This is because will maintain backwards compatibility for those
* Applications below Angular 2 RC 5 version that does not support NgModule just yet.
*
* IMPORTANT NOTE:
*
* If your application is equal or above RC 5 It is recommended to import the SDK
* Module located in ./sdk.module.ts and follow the instructions.
*
* Also, It is recommended for you to start upgrading your application in order to
* support NgModules before backwards support is also dropped by Angular.
*
* READ: https://angular.io/docs/ts/latest/cookbook/rc4-to-rc5.html#!#5-cleanup
**/
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var index_1 = require('./services/index');
/**
* IMPORTANT: API_PROVIDERS WILL BE DEPRECATED WHEN ANGULAR 2 IS STABLE
* PLEASE MIGRATE YOUR PROJECT AS SOON AS POSSIBLE.
* ONCE ANGULAR 2 IS STABLE I WON'T KEEP SUPPORTING API PROVIDERS.
* USER NGMODULE INSTEAD LOCATED IN ./sdk.module.ts
**/
exports.API_PROVIDERS = [
    index_1.LoopBackAuth,
    index_1.ErrorHandler,
    index_1.LoggerService,
    index_1.JSONSearchParams,
    index_1.CategoryApi,
    index_1.CompanyApi,
    index_1.CompanyServiceApi,
    index_1.CompanyDetailApi,
    index_1.CompanyLocationApi,
    index_1.CountryApi,
    index_1.RegionApi,
    index_1.CityApi,
    index_1.DistrictApi,
    index_1.StreetTypeApi,
    index_1.StreetApi,
    index_1.BuildingApi,
    index_1.BookingApi,
    index_1.CategoryCompanyApi,
    index_1.NotifyApi,
    index_1.LogsApi,
    index_1.SmsLogsApi,
    index_1.ContainerApi,
    index_1.ClientApi,
    index_1.CoreApi
];
__export(require('./models/index'));
__export(require('./services/index'));
__export(require('./lb.config'));
//# sourceMappingURL=index.js.map