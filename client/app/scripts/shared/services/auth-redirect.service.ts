import { Injectable } from '@angular/core';

@Injectable()
export class AuthRedirectService {
  private url: string = '/';

  get redirectUrl(): string {
    return this.url;
  }

  set redirectUrl(url: string) {
    this.url = url;
  }
}
