import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Client } from '../../shared/index';

@Component({
  selector: 'profile-page',
  templateUrl: 'scripts/pages/profile/profile-page.component.html',
  styleUrls: ['scripts/pages/profile/profile-page.component.css']
})

export class ProfilePageComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.auth.currentUser.subscribe((user: Client) => {
      console.log('profile');
      if (!user) {
        this.router.navigate(['/']);
      }
    });
  }
}
