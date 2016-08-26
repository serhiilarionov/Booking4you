import { Component, ViewEncapsulation } from '@angular/core';
import { CompanyListComponent } from '../../components/company/company-list.component';

@Component({
  selector: 'company-list-page[company-list-page]',
  templateUrl: 'scripts/pages/company-list/company-list-page.component.html',
  styleUrls: ['scripts/pages/company-list/company-list-page.component.css'],
  directives: [CompanyListComponent],
  encapsulation: ViewEncapsulation.None
})

export class CompanyListPageComponent {
}
