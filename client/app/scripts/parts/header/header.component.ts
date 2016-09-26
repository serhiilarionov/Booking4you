import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { Client, ClientApi, LoopBackAuth, SidebarService, Broadcaster, EventTypes } from '../../shared/index';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: 'scripts/parts/header/header.component.html',
  styleUrls: ['scripts/parts/header/header.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {
  public currentUser: Client;

  constructor(
    private sidebar: SidebarService,
    private auth: LoopBackAuth,
    private clientApi: ClientApi,
    @Inject(Broadcaster) private broadcaster: Broadcaster<string>
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

  logout() {
    this.clientApi.logout().subscribe(() => {
      this.broadcaster.emit(EventTypes.LOGGED_OUT);
      this.currentUser = null;
    });
  }
}
