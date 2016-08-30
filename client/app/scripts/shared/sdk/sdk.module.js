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
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var index_1 = require('./services/index');
var SDKModule = (function () {
    function SDKModule() {
    }
    SDKModule.forRoot = function () {
        return {
            ngModule: SDKModule,
            providers: [
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