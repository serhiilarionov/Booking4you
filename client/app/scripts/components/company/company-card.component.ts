import { Component, Input } from '@angular/core';
import { Company } from '../../shared/index';

@Component({
  selector: '[company-card]',
  templateUrl: 'scripts/components/company/company-card.component.html',
  styleUrls: ['scripts/components/company/company-card.component.css']

})
export class CompanyCardComponent {
  @Input() company: Company;
}
