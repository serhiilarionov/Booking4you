import { Directive, OnInit, EventEmitter, Output } from '@angular/core';
import { SebmGoogleMapMarker, MarkerManager } from 'angular2-google-maps/core';
import { Marker } from 'angular2-google-maps/core/services/google-maps-types';

@Directive({
  selector: '[onMarkerLoaded]'
})
export class OnMarkerLoaded implements OnInit {
  @Output() public onMarkerLoaded: EventEmitter<Marker> = new EventEmitter();
  constructor(
    private markerManager: MarkerManager,
    private marker: SebmGoogleMapMarker
  ) {}
  ngOnInit() {
    this.markerManager.getNativeMarker(this.marker).then((marker: Marker) => {
      this.onMarkerLoaded.next(marker);
    });
  }
}
