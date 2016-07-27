import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'scripts/parts/header/header.component.html',
  styleUrls: ['scripts/parts/header/header.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent {}
