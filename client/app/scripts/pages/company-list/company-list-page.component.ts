import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Company, CompanyApi } from '../../shared/index';
declare var $: any;

@Component({
  selector: 'company-list-page',
  templateUrl: './company-list-page.component.html',
  styleUrls: ['./company-list-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CompanyListPageComponent implements OnInit {
  public filter: any = {where: {cityId: null, categoryId: null}, limit: 100};
  public companyList: Array<Company>;

  constructor(
    private route: ActivatedRoute,
    private companyApi: CompanyApi
  ) {
    this.filter.where = {
      cityId: this.route.snapshot.queryParams['city'],
      categoryId: this.route.snapshot.queryParams['category']
    };
  }

  ngOnInit() {
    this.resizeMapListWrapper();
    $(window).on('resize', () => this.resizeMapListWrapper());

    this.route.queryParams.subscribe((params: Params) => {
      this.filter.where = Object.assign({}, params);
      this.getCompanyList();
    });
  }

  resizeMapListWrapper() {
    let windowHeight = $(window).height();
    let headerHeight = $('app-header').height();
    $('#map-list-wrapper').height(windowHeight - headerHeight);
  }

  getCompanyList() {
    this.companyList = [];
    // Get companyList only when city and category filters are checked
    if ( this.filter.where.cityId && this.filter.where.categoryId ) {
      this.companyApi.find(this.filter).subscribe((companyList: Array<Company>) => {
        this.companyList = companyList;
      });
    }
  }
}
