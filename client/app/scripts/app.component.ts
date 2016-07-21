import { Component } from '@angular/core';
import { HeaderComponent } from './parts/header/header.component'
import {FooterComponent} from "./parts/footer/footer.component";
import {ContentComponent} from "./parts/content/content.component";

@Component({
  selector: 'my-app',
  templateUrl: 'scripts/app.component.html',
  directives: [HeaderComponent, ContentComponent, FooterComponent],
})

export class AppComponent {
  constructor() {
    console.log('aaaa');
  }
}
