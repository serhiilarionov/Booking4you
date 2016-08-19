import { Component } from '@angular/core';
import { RegistrationFormComponent } from '../../components/auth/registration-form.conponent';

@Component({
  selector: 'registration-page',
  templateUrl: 'scripts/pages/registration/registration-page.component.html',
  directives: [RegistrationFormComponent]
})

export class RegistrationPageComponent {
}
