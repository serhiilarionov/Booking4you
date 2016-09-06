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

import { HttpModule }    from '@angular/http';
import { CommonModule }  from '@angular/common';
import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import {
  LoopBackAuth,
  ErrorHandler,
  LoggerService,
  JSONSearchParams,
  CategoryApi,
  CompanyApi,
  CompanyServiceApi,
  CompanyDetailApi,
  CountryApi,
  RegionApi,
  CityApi,
  DistrictApi,
  StreetTypeApi,
  StreetApi,
  BuildingApi,
  BookingApi,
  CategoryCompanyApi,
  NotifyApi,
  LogsApi,
  SmsLogsApi,
  ContainerApi,
  ClientApi,
  CoreApi
} from './services/index';

@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [ ]
})

export class SDKModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SDKModule,
      providers: [
      LoopBackAuth,
      ErrorHandler,
      LoggerService,
      JSONSearchParams,
        CategoryApi,
        CompanyApi,
        CompanyServiceApi,
        CompanyDetailApi,
        CountryApi,
        RegionApi,
        CityApi,
        DistrictApi,
        StreetTypeApi,
        StreetApi,
        BuildingApi,
        BookingApi,
        CategoryCompanyApi,
        NotifyApi,
        LogsApi,
        SmsLogsApi,
        ContainerApi,
        ClientApi,
        CoreApi
      ]
    };
  }
}
