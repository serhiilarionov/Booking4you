import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'gmap',
    templateUrl: 'scripts/components/gmap/gmap.component.html',
    styleUrls: ['scripts/components/gmap/gmap.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class GmapComponent {
    lat: number = 30;
    lng: number = 40;
}
