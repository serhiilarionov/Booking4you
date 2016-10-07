import { Component, ViewEncapsulation } from '@angular/core';
import { Client, ClientApi, AuthService, SidebarService } from '../../shared/index';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {
  public currentUser: Client;

  constructor(
    private sidebar: SidebarService,
    private clientApi: ClientApi,
    private auth: AuthService
  ) {
    this.currentUser = this.clientApi.getCachedCurrent();

    this.auth.currentUser.subscribe((user: Client) => {
      this.currentUser = user;
    });
  }

  onSidebarToggle() {
    this.sidebar.toggle();
  }

  logout() {
    this.auth.logout();
  }
}
