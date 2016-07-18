import { Component } from '@angular/core';
import { HeaderComponent } from './parts/header/header.component'
import {FooterComponent} from "./parts/footer/footer.component";

@Component({
  selector: 'my-app',
  templateUrl: 'scripts/app.component.html',
  directives: [HeaderComponent, FooterComponent],
})

export class AppComponent {
  constructor() {

  }
}
