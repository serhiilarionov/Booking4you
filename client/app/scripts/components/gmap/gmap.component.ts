import { Component, ViewEncapsulation, Input, SimpleChange, OnChanges, EventEmitter } from '@angular/core';
import { Company } from '../../shared/index';
import { LatLngBoundsLiteral } from 'angular2-google-maps/core';
import { styles } from './styles';
import { GoogleMap, Marker } from 'angular2-google-maps/core/services/google-maps-types';

@Component({
    selector: 'gmap',
    templateUrl: 'scripts/components/gmap/gmap.component.html',
    styleUrls: ['scripts/components/gmap/gmap.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class GmapComponent implements OnChanges {
  public nativeMarkers: Array<Marker> = [];
  public mapObservable: EventEmitter<GoogleMap> = new EventEmitter();
  public markersObservable: EventEmitter<Array<Marker>> = new EventEmitter();
  public styles: any = styles;
  public bounds: LatLngBoundsLiteral = {east: 38, north: 50, south: 46, west: 24};
  @Input() companyList: Array<Company>;

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    if ('companyList' in changes && changes['companyList'].currentValue) {
      if (!this.companyList.length) {
        // reset markers input for gmap-marker-clusterer component if company list is empty
        this.nativeMarkers = [];
      } else {
        this.calculateBounds();
      }
    }
  }

  public onMapLoaded(map): void {
    this.mapObservable.next(map);
  }

  public onMarkerLoaded(marker): void {
    this.nativeMarkers.push(marker);
    this.markersObservable.next(this.nativeMarkers);
  }

  private calculateBounds(): void {
    let lats = this.companyList.map((company) => company.point.lat);
    let lngs = this.companyList.map((company) => company.point.lng);

    let east: number = Math.max.apply(null, lngs);
    let north: number = Math.max.apply(null, lats);
    let south: number = Math.min.apply(null, lats);
    let west: number = Math.min.apply(null, lngs);
    this.bounds = {east, north, south, west};
  }
}
