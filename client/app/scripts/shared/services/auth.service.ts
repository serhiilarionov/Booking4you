import { Injectable, EventEmitter, Inject, forwardRef } from '@angular/core';
import { Client, ClientApi } from '../index';

@Injectable()
export class AuthService {
  public currentUser: EventEmitter<Client> = new EventEmitter();

  constructor(@Inject(forwardRef(() => ClientApi)) private clientApi: ClientApi) {
    this.updateCurrentUser();
  }

  public login(credentials): void {
    this.clientApi.login(credentials).subscribe(() => this.updateCurrentUser());
  }

  public logout(): void {
    this.clientApi.logout().subscribe(() => this.updateCurrentUser());
  }

  private updateCurrentUser(): void {
    this.currentUser.next(this.clientApi.getCachedCurrent());
  }
}
