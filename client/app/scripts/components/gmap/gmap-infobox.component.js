// import { Component, ElementRef, OnInit } from '@angular/core';
// import { GoogleMapsAPIWrapper, SebmGoogleMapMarker, MarkerManager } from 'angular2-google-maps/core';
// import { InfoboxLoader } from '../../shared/services/index';
//
// @Component({
//   selector: 'gmap-infobox',
//   template: `<div>Here is the infobox</div>`
// })
// export class GmapInfoboxComponent implements OnInit {
//   public nativeMap: any;
//   public nativeMarker: any;
//   public box: any;
//   public InfoBox: any;
//
//   constructor(private elementRef: ElementRef,
//               public wrapper: GoogleMapsAPIWrapper,
//               public marker: SebmGoogleMapMarker,
//               public markerMgr: MarkerManager,
//               public InfoboxLoader: InfoboxLoader) {
//   }
//
//   ngOnInit() {
//
//     this.InfoboxLoader.load().then((infobox) => {
//       this.InfoBox = infobox;
//       this.wrapper.getNativeMap()
//         .then((map) => {
//           this.nativeMap = map;
//           this.markerMgr.getNativeMarker(this.marker)
//             .then((marker) => {
//               this.nativeMarker = marker;
//               this.box = new this.InfoBox({content: this.elementRef.nativeElement});
//               this.box.open(this.nativeMap, this.nativeMarker);
//             });
//         });
//     });
//   }
// }
//# sourceMappingURL=gmap-infobox.component.js.map