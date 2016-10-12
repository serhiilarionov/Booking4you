import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Company, CompanyDetail, CompanyDetailApi, BASE_URL } from '../../../shared/index';

@Component({
  selector: 'company-modal',
  templateUrl: 'scripts/components/company/modal/company-modal.component.html',
  styleUrls: ['scripts/components/company/modal/company-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CompanyModalComponent implements OnChanges {
  public srcArray: Array<string> = [];
  @Input() company: Company;

  constructor(
    private companyDetailApi: CompanyDetailApi
  ) {}
  ngOnChanges(changes: SimpleChanges) {
    if ('company' in changes && changes['company'].currentValue) {
      this.srcArray = [];
      this.companyDetailApi.findById(this.company.id).subscribe((companyDetail: CompanyDetail) => {
        this.srcArray = companyDetail.imageList.map((imageName: string) => {
          return `${BASE_URL}/storage/test/${this.company.cityId}/${this.company.categoryId}/${this.company.id}/${imageName}`
        });
      });
    }
  }
}
