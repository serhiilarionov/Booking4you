import { Component, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Client, ClientApi, LoopBackAuth, SidebarService, Broadcaster, EventTypes } from '../../shared/index';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: 'scripts/parts/header/header.component.html',
  styleUrls: ['scripts/parts/header/header.component.css'],
  directives: [ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {
  public currentUser: Client;

  constructor(
    private sidebar: SidebarService,
    private auth: LoopBackAuth,
    private clientApi: ClientApi,
    @Inject(Broadcaster) private broadcaster: Broadcaster<any>
  ) {
    this.broadcaster.subscribe((eventType) => {
      if (eventType === EventTypes.LOGGED_IN) {
        this.currentUser = this.clientApi.getCachedCurrent();
      }
    });
  }

  onSidebarToggle() {
    this.sidebar.toggle();
  }

  ngOnInit() {
    if (this.clientApi.isAuthenticated()) {
      this.clientApi.getCurrent().subscribe((user: Client) => this.currentUser = user);
    }
  }

  logout() {
    this.clientApi.logout().subscribe(() => {
      this.broadcaster.emit(EventTypes.LOGGED_OUT);
      this.currentUser = null;
    });
  }
}
