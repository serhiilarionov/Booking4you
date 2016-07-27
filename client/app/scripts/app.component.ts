import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from './parts/header/header.component'
import {FooterComponent} from './parts/footer/footer.component';

@Component({
  selector: 'app',
  templateUrl: 'scripts/app.component.html',
  styleUrls: ['scripts/app.component.css'],
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  constructor() {}
}
