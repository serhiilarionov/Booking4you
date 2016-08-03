import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/auth/login/login-form.conponent';

@Component({
  selector: 'login-page',
  templateUrl: 'scripts/pages/login/login-page.component.html',
  directives: [LoginFormComponent]
})

export class LoginPageComponent {}
