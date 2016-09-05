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

@NgModule({
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    SDKModule.forRoot()
  ],
  declarations: [AppComponent, ...Parts, ...Pages, ...Directives, ...Components],
  bootstrap: [AppComponent],
  providers: [...Services]
})
export class AppModule {
}
