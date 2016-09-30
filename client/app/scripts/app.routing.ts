import { Routes, RouterModule } from '@angular/router';
import * as Pages from './pages/index';
import * as Components from './components/index';
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
    path: 'profile',
    component: Pages.ProfilePageComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: Components.ProfileFavoritesComponent
      },
      {
        path: 'favorites',
        component: Components.ProfileMainComponent
      }
    ]
  },
  {
    path: 'company-list',
    component: Pages.CompanyListPageComponent
  },
  {
    path: 'company-details/:id',
    component: Pages.CompanyDetailsPageComponent
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
