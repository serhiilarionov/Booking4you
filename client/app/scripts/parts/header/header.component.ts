import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SidebarService } from '../sidebar/sidebar.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: 'scripts/parts/header/header.component.html',
  styleUrls: ['scripts/parts/header/header.component.css'],
  directives: [ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {
  constructor(private el: ElementRef, private sidebar: SidebarService) {
    this.el = el.nativeElement;
  }

  onSidebarToggle() {
    this.sidebar.toggle();
  }
}
