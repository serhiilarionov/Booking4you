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
  @Input() gridViewType: boolean = false;
  @Input() filterActive: boolean = false;
  @Input() viewTypeActive: boolean = true;
  @Input() showTitle: boolean = true;
  @Input() companyList: Array<Company>;
  @Input() categoryId: number;

  setViewType(value) {
    switch (value) {
      case 'grid':
        this.gridViewType = true;
            break;

      case 'list':
        this.gridViewType = false;
            break;

      default:
        this.gridViewType = false;
    }
  }
}
