import { provideRouter, RouterConfig }  from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';

const routes: RouterConfig = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
