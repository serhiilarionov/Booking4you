import { Component, ElementRef, ViewEncapsulation, OnInit } from '@angular/core';
import { SidebarService } from './parts/sidebar/sidebar.service';
declare var $: any;

@Component({
  selector: 'app',
  templateUrl: 'scripts/app.component.html',
  styleUrls: ['scripts/app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  private $el: any;

  constructor(private sidebar: SidebarService, private el: ElementRef) {
    this.$el = $(el.nativeElement);
  }

  ngOnInit() {
    this.sidebar.toggled$.subscribe(() => this.$el.toggleClass('sidebar-opened'));
  }
}
