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
import { JSONSearchParams } from './services/core/search.params';
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CategoryApi } from './services/custom/Category';
import { CompanyApi } from './services/custom/Company';
import { CompanyServiceApi } from './services/custom/CompanyService';
import { CompanyDetailApi } from './services/custom/CompanyDetail';
import { CompanyLocationApi } from './services/custom/CompanyLocation';
import { CountryApi } from './services/custom/Country';
import { RegionApi } from './services/custom/Region';
import { CityApi } from './services/custom/City';
import { DistrictApi } from './services/custom/District';
import { StreetTypeApi } from './services/custom/StreetType';
import { StreetApi } from './services/custom/Street';
import { BuildingApi } from './services/custom/Building';
import { BookingApi } from './services/custom/Booking';
import { CategoryCompanyApi } from './services/custom/CategoryCompany';
import { NotifyApi } from './services/custom/Notify';
import { LogsApi } from './services/custom/Logs';
import { SmsLogsApi } from './services/custom/SmsLogs';
import { CommentApi } from './services/custom/Comment';
import { QuestionApi } from './services/custom/Question';
import { CommentQuestionApi } from './services/custom/CommentQuestion';
import { ContainerApi } from './services/custom/Container';
import { ClientApi } from './services/custom/Client';
import { CoreApi } from './services/custom/Core';

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
      CompanyLocationApi,
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
      CommentApi,
      QuestionApi,
      CommentQuestionApi,
      ContainerApi,
      ClientApi,
      CoreApi
      ]
    };
  }
}
