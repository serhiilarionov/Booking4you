import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Company, CompanyApi } from '../../shared/index';

@Component({
  selector: 'company-details-page',
  templateUrl: 'scripts/pages/company-details/company-details-page.component.html',
  styleUrls: ['scripts/pages/company-details/company-details-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyDetailsPageComponent implements OnInit {
  public queryId: number;
  public companyNotFound: boolean;
  public companyDetails: Company;

  constructor(
    public companyApi: CompanyApi,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.queryId = +params['id'];
      this.companyApi.findById(this.queryId).subscribe((company: Company) => {
        this.companyDetails = company;
      }, (error) => {
        this.companyNotFound = true;
      });
    });
  }}
