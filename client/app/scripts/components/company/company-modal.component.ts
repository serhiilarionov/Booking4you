import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Company } from '../../shared/index';

@Component({
  selector: 'company-modal',
  templateUrl: 'scripts/components/company/company-modal.component.html',
  styleUrls: ['scripts/components/company/company-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CompanyModalComponent {
  @Input() company: Company;

  // TODO: modal gallery
}
