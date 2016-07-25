import { provideRouter, RouterConfig }  from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import {RegisterPageComponent} from "./pages/register/register-page.component";

const routes: RouterConfig = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  }

];

export const appRouterProviders = [
  provideRouter(routes)
];
