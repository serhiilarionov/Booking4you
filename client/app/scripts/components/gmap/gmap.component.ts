import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Company } from '../../shared/index';

@Component({
    selector: 'gmap',
    templateUrl: 'scripts/components/gmap/gmap.component.html',
    styleUrls: ['scripts/components/gmap/gmap.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class GmapComponent {
  public lat: number = 50;
  public lng: number = 30;
  public zoom: number = 6;
  @Input() companyList: Array<Company>;
}
