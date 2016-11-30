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
    path: 'profile',
    component: Pages.ProfilePageComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: Pages.ProfileMainComponent
      },
      {
        path: 'favorites',
        component: Pages.ProfileFavoritesComponent
      },
      {
        path: 'orders',
        component: Pages.ProfileMyOrdersComponent
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
    path: 'review/:bookingId',
    component: Pages.ReviewPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'comming-soon'
  }
];

export const routing = RouterModule.forRoot(routes);
