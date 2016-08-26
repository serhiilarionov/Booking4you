import { Routes, RouterModule } from '@angular/router';
import * as Pages from './pages';

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
  }
];

export const routing = RouterModule.forRoot(routes);
