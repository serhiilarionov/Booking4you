import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EMAIL_REGEX, PASSWORD_MIN_LENGTH, CustomValidators } from '../../shared/index';

@Component({
  selector: 'registration-form',
  templateUrl: 'scripts/components/auth/registration-form.component.html'
})

export class RegistrationFormComponent {
  registrationForm: FormGroup;
  submitted: boolean = false;
  passwordMinLength = PASSWORD_MIN_LENGTH;

  constructor(private formBuilder: FormBuilder) {
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

  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.valid) {
      // TODO: registration functionality
    }
  }
}
