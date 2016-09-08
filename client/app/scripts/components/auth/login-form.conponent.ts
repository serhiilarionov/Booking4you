import { Component, Inject } from '@angular/core';
import { Broadcaster } from '../../shared/index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  BASE_URL,
  API_VERSION,
  EMAIL_REGEX,
  PASSWORD_MIN_LENGTH,
  ClientApi,
  LoopBackConfig,
  EventTypes,
  AuthRedirectService
} from '../../shared/index';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: 'scripts/components/auth/login-form.component.html'
})

export class LoginFormComponent {
  loginForm: FormGroup;
  submitted: boolean = false;
  passwordMinLength = PASSWORD_MIN_LENGTH;

  constructor(
    private clientApi: ClientApi,
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject(AuthRedirectService) private authRedirect: AuthRedirectService,
    @Inject(Broadcaster) private broadcaster: Broadcaster<string>
  ) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
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
    this.clientApi.login(credentials).subscribe(() => {
      this.broadcaster.emit(EventTypes.LOGGED_IN);
      this.router.navigate([this.authRedirect.getRedirectUrl()]);
    });
  }
}
