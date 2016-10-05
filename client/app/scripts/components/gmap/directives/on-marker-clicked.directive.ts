import { Directive, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SebmGoogleMapMarker, MarkerManager } from 'angular2-google-maps/core';
import { Marker } from 'angular2-google-maps/core/services/google-maps-types';

@Directive({
  selector: '[onMarkerClicked]'
})
export class OnMarkerClicked implements OnInit {
  @Input() public enableInfoBox: boolean = false;
  @Output() public onMarkerClicked: EventEmitter<Marker> = new EventEmitter();
  constructor(
    private markerManager: MarkerManager,
    private marker: SebmGoogleMapMarker
  ) {}
  ngOnInit() {
    if (!this.enableInfoBox) { return; }

    this.markerManager.createEventObservable('click', this.marker).subscribe(() => {
      this.markerManager.getNativeMarker(this.marker).then((marker: Marker) => {
        this.onMarkerClicked.next(marker);
      });
    });
  }
}
