import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { SidebarComponent } from './parts/sidebar/sidebar.component';
import { routing } from './app.routing';
import { SidebarService } from './parts/sidebar/sidebar.service';
import { Constants } from './common/services/constants';
import * as Pages from './pages';
import * as Directives from './common/directives';

let declarations = [AppComponent, HeaderComponent, FooterComponent, SidebarComponent];

for (let key in Pages) {
  declarations.push(Pages[key]);
}

for (let key in Directives) {
  declarations.push(Directives[key]);
}

@NgModule({
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule
  ],
  declarations,
  bootstrap: [AppComponent],
  providers: [
    SidebarService,
    Constants
  ]
})
export class AppModule {
}
