import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Company } from '../../shared/index';
declare var $: any;

@Component({
  selector: 'company-list-page[company-list-page]',
  templateUrl: 'scripts/pages/company-list/company-list-page.component.html',
  styleUrls: ['scripts/pages/company-list/company-list-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CompanyListPageComponent implements OnInit {
  public companyList: Array<Company>;

  ngOnInit() {
    this.resizeMapListWrapper();
    $(window).on('resize', () => this.resizeMapListWrapper());
  }

  onCompanyListLoaded(companyList) {
    this.companyList = companyList;
  }

  resizeMapListWrapper() {
    let windowHeight = $(window).height();
    let headerHeight = $('app-header').height();
    $('#map-list-wrapper').height(windowHeight - headerHeight);
  }
}
