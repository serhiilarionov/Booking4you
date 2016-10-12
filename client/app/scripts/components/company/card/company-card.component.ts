import { Component, OnChanges, SimpleChanges, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Company, BASE_URL } from '../../../shared/index';

@Component({
  selector: 'company-card',
  templateUrl: 'scripts/components/company/card/company-card.component.html',
  styleUrls: ['scripts/components/company/card/company-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyCardComponent implements OnChanges {
  public photoUrl: string;
  @Input() company: Company;
  @Output() onCompanySelected: EventEmitter<any> = new EventEmitter();

  openCompanyModal(company: Company) {
    this.onCompanySelected.next(company);
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('company' in changes && changes['company'].currentValue) {
      this.photoUrl = this.company.photo ?
        `${BASE_URL}/storage/test/${this.company.cityId}/${this.company.categoryId}/${this.company.id}/${this.company.photo}` :
        'http://placehold.it/220?text=no+photo';
    }
  }
}
