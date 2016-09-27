import { Component, Input } from '@angular/core';

@Component({
  selector: 'company-map',
  templateUrl: 'scripts/components/company-details/map/company-map.component.html',
  styleUrls: ['scripts/components/company-details/map/company-map.component.css']
})

export class CompanyMap {
  public zoom: number = 15;
  @Input() companyDetails: any;
}
