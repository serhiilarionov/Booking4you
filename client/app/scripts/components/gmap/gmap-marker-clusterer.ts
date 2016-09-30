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
      styles: [{
        url: '/scripts/components/gmap/images/m1.png',
        height: 52,
        width: 53,
        textColor: '#ffffff',
        textSize: 11
      }, {
        url: '/scripts/components/gmap/images/m2.png',
        height: 55,
        width: 56,
        textColor: '#ffffff',
        textSize: 11
      }, {
        url: '/scripts/components/gmap/images/m3.png',
        height: 65,
        width: 66,
        textColor: '#ffffff',
        textSize: 11
      }, {
        url: '/scripts/components/gmap/images/m4.png',
        height: 77,
        width: 78,
        textColor: '#ffffff',
        textSize: 11
      }, {
        url: '/scripts/components/gmap/images/m5.png',
        height: 89,
        width: 90,
        textColor: '#ffffff',
        textSize: 11
      }]
    });
  }
}
