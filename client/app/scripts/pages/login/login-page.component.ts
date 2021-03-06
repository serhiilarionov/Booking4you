import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthRedirectService, Client } from '../../shared/index';

@Component({
  selector: 'login-page',
  templateUrl: 'scripts/pages/login/login-page.component.html'
})

export class LoginPageComponent {
  constructor(
    private auth: AuthService,
    private authRedirect: AuthRedirectService,
    private router: Router
  ) {
    this.auth.currentUser.subscribe((user: Client) => {
      if (user) { this.router.navigateByUrl(this.authRedirect.redirectUrl); }
    });
  }
}
