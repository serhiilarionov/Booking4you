import { Routes, RouterModule } from '@angular/router';
import * as Pages from './pages/index';

const routes: Routes = [
  {
    path: '',
    component: Pages.HomePageComponent
  },
  {
    path: 'login',
    component: Pages.LoginPageComponent
  },
  {
    path: 'registration',
    component: Pages.RegistrationPageComponent
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
