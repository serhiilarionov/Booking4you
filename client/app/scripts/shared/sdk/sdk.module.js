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
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MTI 2016 Jonathan Casarrubias
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDKModule }      from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDKModule.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
var search_params_1 = require('./services/core/search.params');
var error_service_1 = require('./services/core/error.service');
var auth_service_1 = require('./services/core/auth.service');
var logger_service_1 = require('./services/custom/logger.service');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
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
var SDKModule = (function () {
    function SDKModule() {
    }
    SDKModule.forRoot = function () {
        return {
            ngModule: SDKModule,
            providers: [
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
            ]
        };
    };
    SDKModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, http_1.HttpModule],
            declarations: [],
            exports: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], SDKModule);
    return SDKModule;
}());
exports.SDKModule = SDKModule;
//# sourceMappingURL=sdk.module.js.map