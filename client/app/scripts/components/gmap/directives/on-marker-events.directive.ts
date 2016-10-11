import { Directive, OnInit, OnDestroy, EventEmitter, Input, Output } from '@angular/core';
import { SebmGoogleMapMarker, MarkerManager } from 'angular2-google-maps/core';
import { Marker } from 'angular2-google-maps/core/services/google-maps-types';

@Directive({
  selector: '[onMarkerEvents]'
})
export class OnMarkerEvents implements OnInit, OnDestroy {
  public marker: any;
  @Input() markerClusterer: any;
  @Input() public enableInfoBox: boolean = false;
  @Input() public enableClusterer: boolean = false;
  @Output() public onMarkerClicked: EventEmitter<Marker> = new EventEmitter<Marker>();
  constructor(
    private markerManager: MarkerManager,
    private sebmGoogleMapMarker: SebmGoogleMapMarker
  ) {}
  ngOnInit() {
    this.markerManager.getNativeMarker(this.sebmGoogleMapMarker).then((marker: Marker) => {
      this.marker = marker;

      if (this.enableClusterer) {
        this.markerClusterer.addMarker(this.marker);
      }

      // create click event listener only if infobox is enabled
      if (this.enableInfoBox) {
        this.markerManager.createEventObservable('click', this.sebmGoogleMapMarker).subscribe(() => {
          this.onMarkerClicked.next(this.marker);
        });
      }
    });
  }
  ngOnDestroy() {
    if (this.enableClusterer) {
      this.markerClusterer.removeMarker(this.marker);
    }
  }
}
