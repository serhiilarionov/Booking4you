import { Directive, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SebmGoogleMapMarker, MarkerManager } from 'angular2-google-maps/core';
import { Marker } from 'angular2-google-maps/core/services/google-maps-types';

@Directive({
  selector: '[onMarkerLoaded]'
})
export class OnMarkerLoaded implements OnInit {
  @Input() public enableClusterer: boolean = false;
  @Output() public onMarkerLoaded: EventEmitter<Marker> = new EventEmitter();
  constructor(
    private markerManager: MarkerManager,
    private marker: SebmGoogleMapMarker
  ) {}
  ngOnInit() {
    if (!this.enableClusterer) { return; }

    this.markerManager.getNativeMarker(this.marker).then((marker: Marker) => {
      this.onMarkerLoaded.next(marker);
    });
  }
}
