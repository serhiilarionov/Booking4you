import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Company, CompanyApi } from '../../shared/index';
import { LatLngBounds, LatLngBoundsLiteral } from 'angular2-google-maps/core';
declare var $: any;

@Component({
  selector: 'company-list-page',
  templateUrl: 'scripts/pages/company-list/company-list-page.component.html',
  styleUrls: ['scripts/pages/company-list/company-list-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CompanyListPageComponent implements OnInit {
  public bounds: LatLngBoundsLiteral;
  public categoryId: number = null;
  public companyList: Array<Company> = [];

  constructor(
    private route: ActivatedRoute,
    private companyApi: CompanyApi
  ) {
    this.categoryId = this.route.snapshot.queryParams['category'];
  }

  ngOnInit() {
    this.resizeMapListWrapper();
    $(window).on('resize', () => this.resizeMapListWrapper());

    this.route.queryParams.subscribe((params: Params) => {
      this.categoryId = 'categoryId' in params ? params['categoryId'] : null;
      this.getCompanyList();
    });
  }

  resizeMapListWrapper() {
    let windowHeight = $(window).height();
    let headerHeight = $('app-header').height();
    $('#map-list-wrapper').height(windowHeight - headerHeight);
  }

  onBoundsChanged(bounds: LatLngBounds) {
    this.bounds = bounds.toJSON();
    this.getCompanyList();
  }

  getCompanyList() {
    // Get companyList only when city and category filters are checked
    if (this.bounds && this.categoryId) {
      this.companyApi.byGeo(`${this.bounds.west}, ${this.bounds.north}, ${this.bounds.east}, ${this.bounds.south}`,
                              this.categoryId).subscribe((companyList: Array<Company>) => {
        this.companyList = companyList;
      });
    }
  }
}
