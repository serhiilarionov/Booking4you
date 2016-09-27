import { Component, Input, OnInit } from '@angular/core';
import {Company, CompanyApi } from '../../../shared/index';

@Component({
  selector: 'nearby-companies',
  templateUrl: 'scripts/components/company-details/nearby/nearby-companies.component.html',
  styleUrls: ['scripts/components/company-details/nearby/nearby-companies.component.css']
})

export class NearbyCompanies implements OnInit {
  public companyList: Array<Company>;
  private nearbyFilter: any;
  @Input() companyDetails: any;
  constructor (private companyApi: CompanyApi) {}

  ngOnInit() {
    this.nearbyFilter = {
      where: {
        cityId: this.companyDetails.cityId,
        categoryId: this.companyDetails.categoryId,
        id: { neq: this.companyDetails.id }
      },
      limit: 3
    };
    this.companyApi.find(this.nearbyFilter).subscribe((companyList: Array<Company>) => {
      this.companyList = companyList;
    });
  }
}

