import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthRedirectService, Client } from '../../shared/index';

@Component({
  selector: 'registration-page',
  templateUrl: 'scripts/pages/registration/registration-page.component.html'
})

export class RegistrationPageComponent {
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
