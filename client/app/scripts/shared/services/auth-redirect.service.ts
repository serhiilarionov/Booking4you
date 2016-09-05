import { Injectable } from '@angular/core';

@Injectable()
export class AuthRedirectService {
  private redirectUrl: any = null;

  setRedirectUrl(url) {
    this.redirectUrl = url;
  }

  getRedirectUrl() {
    let redirectUrl = this.redirectUrl ? this.redirectUrl : '/';
    this.deleteRedirectUrl();

    return redirectUrl;
  }

  deleteRedirectUrl() {
    this.redirectUrl = null;
  }
}
