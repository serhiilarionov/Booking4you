import { Directive, OnInit, Input, EventEmitter } from '@angular/core';
import { GoogleMap, Marker } from 'angular2-google-maps/core/services/google-maps-types';
declare var MarkerClusterer: any;

@Directive({
  selector: 'gmap-marker-clusterer'
})
export class GmapMarkerClusterer implements OnInit {
  public markerClusterer: any;
  @Input() public mapObservable: EventEmitter<GoogleMap>;
  @Input() public markersObservable: EventEmitter<Array<Marker>>;

  ngOnInit() {
    this.mapObservable.subscribe((map: GoogleMap) => {
      this.markersObservable.subscribe((markers: Array<Marker>) => {
        if (!this.markerClusterer) {
          this.createClusterer(map, markers);
          return;
        }
        this.markerClusterer.clearMarkers();
        this.markerClusterer.addMarkers(markers);
      });
    });
  }

  createClusterer(map, markers) {
    this.markerClusterer = new MarkerClusterer(map, markers, {
      imagePath: '/vendor/js-marker-clusterer/images/m'
    });
  }
}
