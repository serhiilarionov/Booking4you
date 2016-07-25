import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from './parts/header/header.component'
import {FooterComponent} from './parts/footer/footer.component';
// import {ContentComponent} from "./parts/content/content.component";

@Component({
  selector: '[app][id=outer-wrapper]',
  templateUrl: 'scripts/app.component.html',
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent]
})

export class AppComponent {
  constructor() {}
}
