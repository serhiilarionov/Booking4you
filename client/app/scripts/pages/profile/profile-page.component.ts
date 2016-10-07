import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Client } from '../../shared/index';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.auth.currentUser.subscribe((user: Client) => {
      if (!user) {
        this.router.navigate(['/']);
      }
    });
  }
}
