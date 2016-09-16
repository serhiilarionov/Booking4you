import { Routes, RouterModule } from '@angular/router';
import * as Pages from './pages/index';
import { AuthGuardService } from './shared/index';

const routes: Routes = [
  {
    path: '',
    component: Pages.HomePageComponent
  },
  {
    path: 'login',
    component: Pages.LoginPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'registration',
    component: Pages.RegistrationPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'company-list',
    component: Pages.CompanyListPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'comming-soon',
    component: Pages.CommingSoonPageComponent
  },
  {
    path: '**',
    redirectTo: 'comming-soon'
  }
];

export const routing = RouterModule.forRoot(routes);
