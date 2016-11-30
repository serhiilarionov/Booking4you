"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
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
var search_params_1 = require('./services/core/search.params');
var error_service_1 = require('./services/core/error.service');
var auth_service_1 = require('./services/core/auth.service');
var logger_service_1 = require('./services/custom/logger.service');
var Category_1 = require('./services/custom/Category');
var Company_1 = require('./services/custom/Company');
var CompanyService_1 = require('./services/custom/CompanyService');
var CompanyDetail_1 = require('./services/custom/CompanyDetail');
var CompanyLocation_1 = require('./services/custom/CompanyLocation');
var Country_1 = require('./services/custom/Country');
var Region_1 = require('./services/custom/Region');
var City_1 = require('./services/custom/City');
var District_1 = require('./services/custom/District');
var StreetType_1 = require('./services/custom/StreetType');
var Street_1 = require('./services/custom/Street');
var Building_1 = require('./services/custom/Building');
var Booking_1 = require('./services/custom/Booking');
var CategoryCompany_1 = require('./services/custom/CategoryCompany');
var Notify_1 = require('./services/custom/Notify');
var Logs_1 = require('./services/custom/Logs');
var SmsLogs_1 = require('./services/custom/SmsLogs');
var Comment_1 = require('./services/custom/Comment');
var Question_1 = require('./services/custom/Question');
var CommentQuestion_1 = require('./services/custom/CommentQuestion');
var Container_1 = require('./services/custom/Container');
var Client_1 = require('./services/custom/Client');
var Core_1 = require('./services/custom/Core');
/**
* IMPORTANT: API_PROVIDERS WILL BE DEPRECATED WHEN ANGULAR 2 IS STABLE
* PLEASE MIGRATE YOUR PROJECT AS SOON AS POSSIBLE.
* ONCE ANGULAR 2 IS STABLE I WON'T KEEP SUPPORTING API PROVIDERS.
* USER NGMODULE INSTEAD LOCATED IN ./sdk.module.ts
**/
exports.API_PROVIDERS = [
    auth_service_1.LoopBackAuth,
    error_service_1.ErrorHandler,
    logger_service_1.LoggerService,
    search_params_1.JSONSearchParams,
    Category_1.CategoryApi,
    Company_1.CompanyApi,
    CompanyService_1.CompanyServiceApi,
    CompanyDetail_1.CompanyDetailApi,
    CompanyLocation_1.CompanyLocationApi,
    Country_1.CountryApi,
    Region_1.RegionApi,
    City_1.CityApi,
    District_1.DistrictApi,
    StreetType_1.StreetTypeApi,
    Street_1.StreetApi,
    Building_1.BuildingApi,
    Booking_1.BookingApi,
    CategoryCompany_1.CategoryCompanyApi,
    Notify_1.NotifyApi,
    Logs_1.LogsApi,
    SmsLogs_1.SmsLogsApi,
    Comment_1.CommentApi,
    Question_1.QuestionApi,
    CommentQuestion_1.CommentQuestionApi,
    Container_1.ContainerApi,
    Client_1.ClientApi,
    Core_1.CoreApi
];
__export(require('./models/index'));
__export(require('./services/index'));
__export(require('./lb.config'));
__export(require('./sdk.module'));
//# sourceMappingURL=index.js.map