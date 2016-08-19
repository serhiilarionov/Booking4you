import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../../common/services/constants';

@Component({
  selector: 'login-form',
  templateUrl: 'scripts/components/auth/login-form.component.html'
})

export class LoginFormComponent {
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(private constants: Constants,
              private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.constants.EMAIL_REGEX)
        ])
      ],
      password: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(this.constants.PASSWORD_MIN_LENGTH)
        ])
      ]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      // TODO: login functionality
    }
  }
}
