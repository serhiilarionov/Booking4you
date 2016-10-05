import { Component, ViewEncapsulation, Input, SimpleChange, OnChanges, EventEmitter } from '@angular/core';
import { Company } from '../../shared/index';
import { LatLngBoundsLiteral } from 'angular2-google-maps/core';
import { styles } from './styles';
import { Marker } from 'angular2-google-maps/core/services/google-maps-types';

export interface CompanyMarker {
  marker: Marker;
  company: Company;
}

@Component({
    selector: 'gmap',
    templateUrl: 'scripts/components/gmap/gmap.component.html',
    styleUrls: ['scripts/components/gmap/gmap.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class GmapComponent implements OnChanges {
  public markerIconUrl: string = 'scripts/components/gmap/images/spotlight-poi.png';
  public richMarkers: Array<any> = [];
  public nativeMarkers: Array<Marker> = [];
  public infoBox: any;
  public markersObservable: EventEmitter<Array<Marker>> = new EventEmitter();
  public markerClicked: EventEmitter<CompanyMarker> = new EventEmitter();
  public zoomChange: EventEmitter<any> = new EventEmitter();
  public styles: any = styles;
  public bounds: LatLngBoundsLiteral = {east: 38, north: 50, south: 46, west: 24};
  @Input() public companyList: Array<Company>;
  @Input() public enableClusterer: boolean = false;
  @Input() public enableInfoBox: boolean = false;

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    if ('companyList' in changes && changes['companyList'].currentValue) {
      if (!this.companyList.length) {
        // hide infobox when new companyList
        if (this.infoBox) { this.infoBox.setVisible(false); }
        // reset markers input for gmap-marker-clusterer component if company list is empty
        this.richMarkers.forEach((marker) => {
          marker.onRemove();
        });
        this.richMarkers = [];
        this.nativeMarkers = [];
      } else {
        this.calculateBounds();
      }
    }
  }

  public onMarkerLoaded(marker): void {
    this.nativeMarkers.push(marker);
    this.markersObservable.next(this.nativeMarkers);
  }

  public onMarkerClicked(companyMarker: CompanyMarker): void {
    this.markerClicked.next(companyMarker);
  }

  public onRichMarkerCreated(marker) {
    this.richMarkers.push(marker);
  }

  public onInfoBoxCreated(infoBox) {
    this.infoBox = infoBox;
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
