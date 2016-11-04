import { Injectable, EventEmitter, Inject, forwardRef } from '@angular/core';
import { ClientApi, LoopBackAuth, AccessToken, AuthService, BASE_URL } from '../index';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  public socket: SocketIOClient.Socket;
  public response: EventEmitter<any> = new EventEmitter();
  private accessToken: AccessToken;

  constructor(@Inject(forwardRef(() => LoopBackAuth)) private loopBackAuth: LoopBackAuth,
              @Inject(forwardRef(() => ClientApi)) private clientApi: ClientApi,
              @Inject(forwardRef(() => AuthService)) private auth: AuthService) {

    this.clientApi.isAuthenticated() ? this.createSocket() :
      this.auth.currentUser.subscribe((data) => {

        (data && data !== null) ? this.createSocket() : this.socket.close();

      });

  }

  private createSocket(): void {

      this.accessToken = this.loopBackAuth.getToken();

      this.socket = io.connect(BASE_URL);
      this.socket.emit('authentication', this.accessToken);

      this.socket.on('authenticated', () => {
          this.socket.on(`/notify/${this.accessToken.userId}`, (data) => {
              this.response.next(data);
          });
      });

      this.socket.on('unauthorized', (err) => {
          console.log('Socket::', err.message);
      });

  }

}
