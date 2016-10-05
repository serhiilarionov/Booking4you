import { SidebarService } from './sidebar.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { AuthRedirectService } from './auth-redirect.service';

export { SidebarService } from './sidebar.service';
export { AuthGuardService } from './auth-guard.service';
export { AuthService } from './auth.service';
export { AuthRedirectService } from './auth-redirect.service';
export * from './constants';

export const Services: Array<any> = [
  SidebarService,
  AuthGuardService,
  AuthService,
  AuthRedirectService
];
