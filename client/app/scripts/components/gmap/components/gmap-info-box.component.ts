import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewEncapsulation } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { GoogleMap, Marker } from 'angular2-google-maps/core/services/google-maps-types';
import { Company } from '../../../shared/index';
import { CompanyMarker } from '../gmap.component';
declare var google: any;
declare var System: any;
declare var InfoBox: any;

// TODO: open company modal on quick view

@Component({
  selector: 'gmap-info-box',
  templateUrl: 'scripts/components/gmap/components/gmap-info-box.component.html',
  styleUrls: ['scripts/components/gmap/components/gmap-info-box.components.css'],
  encapsulation: ViewEncapsulation.None
})
export class GmapInfoBoxComponent implements OnInit {
  public infoBox: any;
  public company: Company;
  public map: GoogleMap;
  public marker: Marker;
  @Input() public markerClicked: EventEmitter<Marker>;
  @Output() public onInfoBoxCreated: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private googleMapsAPIWrapper: GoogleMapsAPIWrapper,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.googleMapsAPIWrapper.getNativeMap().then((map: GoogleMap) => {
      this.map = map;
      let options = {
        alignBottom: true,
        content: this.elementRef.nativeElement,
        maxWidth: 295,
        boxClass: 'gmap-info-box__wrapper',
        closeBoxMargin: '0 0 -30px 0',
        closeBoxURL: 'scripts/components/gmap/images/close.png',
        pixelOffset: new google.maps.Size( -18, -42),
        infoBoxClearance: new google.maps.Size( 10, 10)
      };
      System.import('info-box').then(() => {
        this.infoBox = new InfoBox(options);

        this.onInfoBoxCreated.next(this.infoBox);
      });
    });

    this.markerClicked.subscribe((companyMarker: CompanyMarker) => {
      if (!this.infoBox) { return; }

      Object.assign(this, companyMarker);
      this.infoBox.setVisible(true);
      this.infoBox.open(this.map, this.marker);
    });
  }
}
