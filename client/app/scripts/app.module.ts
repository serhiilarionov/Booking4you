import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Parts } from './parts/index';
import { routing } from './app.routing';
import { SDKModule } from './shared/sdk/sdk.module';
import { Pages } from './pages/index';
import { Components } from './components/index';
import { Services, Directives } from './shared/index';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    SDKModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAp4wClu7rjAWLAavgCRv5FhM0G9CZeUNI'
    })
  ],
  declarations: [AppComponent, ...Parts, ...Pages, ...Directives, ...Components],
  bootstrap: [AppComponent],
  providers: [...Services]
})
export class AppModule {
}
