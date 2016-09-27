import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company, CompanyApi } from '../../shared/index';

@Component({
  selector: 'company-details-page',
  templateUrl: 'scripts/pages/company-details/company-details-page.component.html',
  styleUrls: ['scripts/pages/company-details/company-details-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyDetailsPageComponent implements OnInit, OnDestroy {
  public queryId: number;
  public companyDetails: Company;
  private getCompanyId: any;

  constructor(public companyApi: CompanyApi,
              private route: ActivatedRoute) {}

  ngOnInit() {

    this.getCompanyId = this.route.params.subscribe( params => {
      this.queryId = +params['id'];
    });

    this.companyApi.findById(this.queryId).subscribe((company: Company) => {
        this.companyDetails = company;
      }
    );
  }
  ngOnDestroy() {
    this.getCompanyId.unsubscribe();
  }
}
