import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { Company } from '../../shared/index';

@Component({
    selector: 'gmap',
    templateUrl: 'scripts/components/gmap/gmap.component.html',
    styleUrls: ['scripts/components/gmap/gmap.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class GmapComponent implements OnInit {
  lat: number = 30;
  lng: number = 40;
  @Input() companyList: Array<Company>;

  ngOnInit() {
    setTimeout(() => {console.log('GMAOP', this.companyList)}, 6000);
  }
}
