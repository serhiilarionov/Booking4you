import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Company } from '../../../shared/index';

@Component({
  selector: 'company-card',
  templateUrl: 'scripts/components/company/card/company-card.component.html',
  styleUrls: ['scripts/components/company/card/company-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyCardComponent {
  @Input() company: Company;
  @Output() onCompanySelected: EventEmitter<any> = new EventEmitter();

  openCompanyModal(company: Company) {
    this.onCompanySelected.next(company);
  }
}
