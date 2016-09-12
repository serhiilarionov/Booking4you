import { Component, ElementRef, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper, SebmGoogleMapMarker, MarkerManager } from 'angular2-google-maps/core';

declare var System: any;
declare var InfoBox: any;

@Component({
  selector: 'gmap-infobox',
  template: `<div>Here is the infobox</div>`
})
export class GmapInfobox implements OnInit {
  public nativeMap: any;
  public nativeMarker: any;
  public box: any;
  public InfoBox: any;
  constructor(
    private elementRef: ElementRef,
    public wrapper: GoogleMapsAPIWrapper,
    public marker: SebmGoogleMapMarker,
    public markerMgr: MarkerManager) {
  }

  ngOnInit() {
     System.import('../../vendor/infobox/infobox.js')
       .then((infobox) => { this.InfoBox = infobox; this.wrapper.getNativeMap()
         .then((map) => { this.nativeMap = map; this.markerMgr.getNativeMarker(this.marker)
           .then((marker) => {
             this.nativeMarker = marker;
             this.box = new InfoBox({content: this.elementRef.nativeElement});
             this.box.open(this.nativeMap, this.nativeMarker);
         });
       }); });
  }
}
