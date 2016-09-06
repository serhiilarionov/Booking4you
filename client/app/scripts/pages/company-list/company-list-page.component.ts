import { Component, ViewEncapsulation, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Broadcaster, EventTypes, Company } from '../../shared/index';
declare var $: any;

@Component({
  selector: 'company-list-page[company-list-page]',
  templateUrl: 'scripts/pages/company-list/company-list-page.component.html',
  styleUrls: ['scripts/pages/company-list/company-list-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CompanyListPageComponent implements OnInit {
  public companyList: Array<Company>;
  constructor(
    private router: Router,
    @Inject(Broadcaster) private broadcaster: Broadcaster<any>
  ) {
    this.broadcaster.subscribe((next) => {
      if (next === EventTypes.LOGGED_OUT) {
        this.router.navigate(['/']);
      }
    });
  }

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
