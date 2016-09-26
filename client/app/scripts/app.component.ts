import { Component, ElementRef, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidebarService } from './shared/index';
import { LoopBackConfig, BASE_URL, API_VERSION, ClientApi, Client, EventTypes, Broadcaster } from './shared/index';
import {LoopBackAuth} from './shared/sdk/services/core/auth.service';
declare var $: any;

@Component({
  selector: 'app',
  templateUrl: 'scripts/app.component.html',
  styleUrls: ['scripts/app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  public currentUser: Client;
  private $el: any;

  constructor(
    private sidebar: SidebarService,
    private el: ElementRef,
    private router: Router,
    private clientApi: ClientApi,
    private loopBackAuth: LoopBackAuth,
    @Inject(Broadcaster) private broadcaster: Broadcaster<string>
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

  ngOnInit() {
    if (this.clientApi.isAuthenticated()) {
      this.clientApi.getCurrent().subscribe((user: Client) => {
        this.loopBackAuth.setCurrentUserData(user);
        this.broadcaster.next(EventTypes.LOGGED_IN);
        this.currentUser = user;
      });
    }
  }
}
