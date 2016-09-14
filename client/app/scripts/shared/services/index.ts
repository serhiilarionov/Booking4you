import { SidebarService } from './sidebar.service';
import { AuthGuardService } from './auth-guard.service';
import { Broadcaster } from './broadcast.service';
import { AuthRedirectService } from './auth-redirect.service';
import { InfoboxLoader } from './infobox-loader.service';

export { SidebarService } from './sidebar.service';
export { AuthGuardService } from './auth-guard.service';
export { Broadcaster } from './broadcast.service';
export { AuthRedirectService } from './auth-redirect.service';
export { InfoboxLoader } from './infobox-loader.service';
export * from './constants';

export const Services: Array<any> = [
  SidebarService,
  AuthGuardService,
  Broadcaster,
  AuthRedirectService,
  InfoboxLoader
];
