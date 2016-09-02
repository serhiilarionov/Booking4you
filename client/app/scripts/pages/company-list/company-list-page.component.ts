import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Broadcaster, EventTypes } from '../../shared/index';

@Component({
  selector: 'company-list-page[company-list-page]',
  templateUrl: 'scripts/pages/company-list/company-list-page.component.html',
  styleUrls: ['scripts/pages/company-list/company-list-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CompanyListPageComponent {
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
}
