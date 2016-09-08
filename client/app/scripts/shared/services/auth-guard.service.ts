import { Injectable, Inject, forwardRef } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ClientApi, AuthRedirectService } from '../../shared/index';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    @Inject(forwardRef(() => ClientApi)) private clientApi: ClientApi,
    @Inject(forwardRef(() => AuthRedirectService)) private authRedirect: AuthRedirectService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // don't let authenticated user go to login or registration pages
    if (state.url === '/login' || state.url === '/registration') {
      if (this.clientApi.isAuthenticated()) {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    }

    // for all another pages that require auth
    if (this.clientApi.isAuthenticated()) {
      return true;
    }

    this.authRedirect.setRedirectUrl(state.url);
    this.router.navigate(['/login']);
    return false;
  }
}
