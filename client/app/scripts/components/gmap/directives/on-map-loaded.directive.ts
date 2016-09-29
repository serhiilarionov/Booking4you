import { Directive, OnInit, EventEmitter, Output } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { GoogleMap } from 'angular2-google-maps/core/services/google-maps-types';

@Directive({
  selector: '[onMapLoaded]'
})
export class OnMapLoaded implements OnInit {
  @Output() public onMapLoaded: EventEmitter<GoogleMap> = new EventEmitter();
  constructor(
    private googleMapsAPIWrapper: GoogleMapsAPIWrapper
  ) {}
  ngOnInit() {
    this.googleMapsAPIWrapper.getNativeMap().then((map: GoogleMap) => {
      this.onMapLoaded.next(map);
    });
  }
}
