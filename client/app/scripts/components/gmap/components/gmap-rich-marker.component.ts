import { Component, ViewEncapsulation, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { GoogleMapsAPIWrapper, MarkerManager, SebmGoogleMapMarker } from 'angular2-google-maps/core';
import { GoogleMap, Marker } from 'angular2-google-maps/core/services/google-maps-types';
declare var System: any;
declare var RichMarker: any;

@Component({
  selector: 'gmap-rich-marker',
  templateUrl: 'scripts/components/gmap/components/gmap-rich-marker.component.html',
  styleUrls: ['scripts/components/gmap/components/gmap-rich-marker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GmapRichMarkerComponent implements OnInit {
  public options: any;
  public nativeMarker: Marker;
  @Output() public onRichMarkerCreated: EventEmitter<any> = new EventEmitter();
  constructor(
    private googleMapsAPIWrapper: GoogleMapsAPIWrapper,
    private markerManager: MarkerManager,
    private marker: SebmGoogleMapMarker,
    private elementRef: ElementRef
  ) {
    this.options = {
      content: this.elementRef.nativeElement,
      draggable: false,
      flat: true
    };
  }

  ngOnInit() {
    this.googleMapsAPIWrapper.getNativeMap().then((map: GoogleMap) => {
      this.options.map = map;
      System.import('rich-marker').then(() => {
        this.markerManager.getNativeMarker(this.marker).then((marker: Marker) => {
          this.nativeMarker = marker;
          this.options.position = this.nativeMarker['position'];
          this.onRichMarkerCreated.next(new RichMarker(this.options));
        });
      });
    });
  }
}
