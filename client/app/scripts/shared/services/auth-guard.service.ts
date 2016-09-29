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
    // not to allow authenticated user to go to login or registration pages
    if (state.url === '/login' || state.url === '/registration') {
      if (this.clientApi.isAuthenticated()) {
        this.router.navigate([this.authRedirect.redirectUrl]);
        return false;
      } else {
        this.authRedirect.redirectUrl = this.router.routerState.snapshot.url;
        return true;
      }
    }

    // for all another pages that require auth
    if (this.clientApi.isAuthenticated()) {
      return true;
    }

    this.authRedirect.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }
}
