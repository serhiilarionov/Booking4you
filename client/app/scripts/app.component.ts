import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidebarService } from './shared/index';
import { LoopBackConfig, BASE_URL, API_VERSION } from './shared/index';
declare var $: any;

@Component({
  selector: 'app',
  templateUrl: 'scripts/app.component.html',
  styleUrls: ['scripts/app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
  private $el: any;

  constructor(
    private sidebar: SidebarService,
    private el: ElementRef,
    private router: Router
  ) {
    this.$el = $(el.nativeElement);
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);

    this.sidebar.toggled$.subscribe(() => {
      this.$el.toggleClass('sidebar-opened');
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.sidebar.opened) {
        this.sidebar.toggle();
      }
    });
  }
}
