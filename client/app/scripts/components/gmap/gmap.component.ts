import { Component, ViewEncapsulation, Input, SimpleChange, OnChanges } from '@angular/core';
import { Company } from '../../shared/index';
import { LatLngBoundsLiteral } from 'angular2-google-maps/core';

@Component({
    selector: 'gmap',
    templateUrl: 'scripts/components/gmap/gmap.component.html',
    styleUrls: ['scripts/components/gmap/gmap.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class GmapComponent implements OnChanges {
  public bounds: LatLngBoundsLiteral = {east: 38, north: 50, south: 46, west: 24};
  @Input() companyList: Array<Company>;

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    if (changes['companyList'] && this.companyList && this.companyList.length) {
      this.calculateBounds();
    }
  }

  private calculateBounds(): void {
    let lats = this.companyList.map((company) => company.point.lat);
    let lngs = this.companyList.map((company) => company.point.lng);

    let east: number = Math.max.apply(null, lats);
    let north: number = Math.max.apply(null, lngs);
    let south: number = Math.min.apply(null, lngs);
    let west: number = Math.min.apply(null, lats);
    this.bounds = {east, north, south, west};
  }
}
