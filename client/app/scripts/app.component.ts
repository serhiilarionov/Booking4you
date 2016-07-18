import { Component } from '@angular/core';
import { HeaderComponent } from './parts/header/header.component'

@Component({
  selector: 'my-app',
  templateUrl: 'scripts/app.component.html',
  directives: [HeaderComponent]
})

export class AppComponent {
  constructor() {

  }
}
