import { Directive, OnInit, Output, EventEmitter } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';

@Directive({
  selector: '[onMapLoaded]'
})
export class OnMapLoaded implements OnInit {
  @Output() onMapLoaded: EventEmitter<GoogleMapsAPIWrapper> = new EventEmitter<GoogleMapsAPIWrapper>();
  constructor(
    private googleMapsAPIWrapper: GoogleMapsAPIWrapper
  ) {}
  ngOnInit() {
    this.onMapLoaded.next(this.googleMapsAPIWrapper);
  }
}
