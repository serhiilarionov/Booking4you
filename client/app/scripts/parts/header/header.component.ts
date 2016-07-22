import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: '[app-header]',
  templateUrl: 'scripts/parts/header/header.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent {}
