import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../../common/services/constants';
import { CustomValidators } from '../../common/custom-validators';

@Component({
  selector: 'registration-form',
  templateUrl: 'scripts/components/auth/registration-form.component.html'
})

export class RegistrationFormComponent {
  registrationForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private constants: Constants) {
    this.registrationForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.constants.EMAIL_REGEX)
      ])],
      passwords: this.formBuilder.group({
        password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(this.constants.PASSWORD_MIN_LENGTH)
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
