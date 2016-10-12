import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Company, CompanyDetail, CompanyApi, CompanyDetailApi, BASE_URL } from '../../shared/index';

@Component({
  selector: 'company-details-page',
  templateUrl: 'scripts/pages/company-details/company-details-page.component.html',
  styleUrls: ['scripts/pages/company-details/company-details-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyDetailsPageComponent implements OnInit {
  public srcArray: Array<string> = [];
  public queryId: number;
  public companyNotFound: boolean;
  public company: Company;
  public companyDetail: CompanyDetail;

  constructor(
    public companyApi: CompanyApi,
    public companyDetailApi: CompanyDetailApi,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.queryId = +params['id'];
      this.srcArray = [];

      this.companyApi.findById(this.queryId).subscribe((company: Company) => {
        this.company = company;
        this.companyDetailApi.findById(this.queryId).subscribe((companyDetail: CompanyDetail) => {
          this.srcArray = companyDetail.imageList.map((imageName: string) => {
            return `${BASE_URL}/storage/test/${this.company.cityId}/${this.company.categoryId}/${this.company.id}/${imageName}`
          });
        });
      }, (error) => {
        this.companyNotFound = true;
      });
    });
  }}
