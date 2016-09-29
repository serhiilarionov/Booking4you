import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EMAIL_REGEX, PASSWORD_MIN_LENGTH, CustomValidators, AuthService, ClientApi } from '../../shared/index';

@Component({
  selector: 'registration-form',
  templateUrl: 'scripts/components/auth/registration-form.component.html'
})

export class RegistrationFormComponent {
  registrationForm: FormGroup;
  submitted: boolean = false;
  passwordMinLength = PASSWORD_MIN_LENGTH;
  private data: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private clientApi: ClientApi,
    private auth: AuthService
  ) {
    this.registrationForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(EMAIL_REGEX)
      ])],
      passwords: this.formBuilder.group({
        password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(PASSWORD_MIN_LENGTH)
        ])],
        confirmPassword: ['', Validators.compose([
          Validators.required
        ])]
      }, {validator: CustomValidators.areEqual})
    });
  }

  public onSubmit() {
    this.submitted = true;

    if (this.registrationForm.valid) {
      this.data = {
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.passwords.password
      };
      this.register(this.data);
    }
  }

  private register(userData) {
    this.clientApi.create(userData).subscribe(() => {
      // login on success
      this.auth.login(this.data);
    }, (error) => {
      console.log(error);
    });
  }
}
