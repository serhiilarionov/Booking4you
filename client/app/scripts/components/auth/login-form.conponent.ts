import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EMAIL_REGEX, PASSWORD_MIN_LENGTH, AuthService } from '../../shared/index';

@Component({
  selector: 'login-form',
  templateUrl: 'scripts/components/auth/login-form.component.html'
})

export class LoginFormComponent {
  loginForm: FormGroup;
  submitted: boolean = false;
  passwordMinLength = PASSWORD_MIN_LENGTH;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['',
        Validators.compose([
          Validators.required,
          Validators.pattern(EMAIL_REGEX)
        ])
      ],
      password: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(PASSWORD_MIN_LENGTH)
        ])
      ]
    });
  }

  public onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.login(this.loginForm.value);
    }
  }

  private login(credentials): void {
    this.auth.login(credentials);
  }
}
