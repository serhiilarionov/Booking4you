import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Company} from '../../../shared/index';

@Component({
  selector: 'company-list',
  templateUrl: 'scripts/components/company/list/company-list.component.html',
  styleUrls: ['scripts/components/company/list/company-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyListComponent {
  public selectedCompany: Company;
  @Input() gridTypeView: boolean = false;
  @Input() filterActive: boolean = false;
  @Input() viewTypeActive: boolean = true;
  @Input() showTitle: boolean = true;
  @Input() companyList: Array<Company>;

  setViewType(value) {
    switch (value) {
      case 'grid':
        this.gridTypeView = true;
            break;

      case 'list':
        this.gridTypeView = false;
            break;

      default:
        this.gridTypeView = false;
    }
  }
}
