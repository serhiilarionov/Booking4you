import { Component, ViewEncapsulation, Input, Output, SimpleChange, OnChanges, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company, City, CityApi } from '../../shared/index';
import { LatLngBoundsLiteral, LatLngBounds, GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { styles } from './styles';
import { Marker, GoogleMap } from 'angular2-google-maps/core/services/google-maps-types';

export interface CompanyMarker {
  marker: Marker;
  company: Company;
}

@Component({
    selector: 'gmap',
    templateUrl: 'scripts/components/gmap/gmap.component.html',
    styleUrls: ['scripts/components/gmap/gmap.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class GmapComponent implements OnChanges {
  public markerIconUrl: string = 'scripts/components/gmap/images/spotlight-poi.png';
  public activeCompanyList: Array<Company> = [];
  public richMarkers: Array<any> = [];
  public companyIds: Array<number> = [];
  public markersToAdd: Array<Company> = [];
  public markersToRemove: Array<Company> = [];
  public googleMapsAPIWrapper: GoogleMapsAPIWrapper;
  public markerClusterer: any;
  public infoBox: any;
  public styles: any = styles;
  public bounds: LatLngBoundsLiteral = {east: 38, north: 50, south: 46, west: 24};
  public markerClicked: EventEmitter<CompanyMarker> = new EventEmitter<CompanyMarker>();
  @Input() public companyList: Array<Company>;
  @Input() public enableClusterer: boolean = false;
  @Input() public enableInfoBox: boolean = false;
  @Input() public latitude: number;
  @Input() public longitude: number;
  @Input() public zoom: number;
  @Output() public boundsChanged: EventEmitter<LatLngBounds> = new EventEmitter<LatLngBounds>();

  constructor(
    private cityApi: CityApi,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if ('cityId' in params) {
        this.cityApi.findById(params['cityId']).subscribe((city: City) => {
          let res = city.bound.split(', ');
          this.bounds = {
            west: parseFloat(res[0]),
            north: parseFloat(res[1]),
            east: parseFloat(res[2]),
            south: parseFloat(res[3])
          };
        });
      }
    });

    if (this.latitude && this.longitude) {
      this.bounds = null;
    }
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    if ('companyList' in changes) {
      this.updateMarkers();
    }
  }

  public onMarkerClustererLoaded(markerClusterer) {
    this.markerClusterer = markerClusterer;
  }

  public onRichMarkerCreated(richMarker: any): void {
    this.richMarkers.push(richMarker);
  }

  public onMarkerClicked(companyMarker: CompanyMarker): void {
    this.markerClicked.next(companyMarker);
  }

  public onInfoBoxCreated(infoBox: any): void {
    this.infoBox = infoBox;
  }

  public onMapLoaded(googleMapsAPIWrapper: GoogleMapsAPIWrapper) {
    this.googleMapsAPIWrapper = googleMapsAPIWrapper;
    this.googleMapsAPIWrapper.getNativeMap().then((map: GoogleMap) => {
      map.setOptions(Object.create({minZoom: 8}));
    });
  }

  public onZoomChanged() {
    if (this.infoBox) { this.infoBox.setVisible(false); }
  }

  public idle() {
    if (!this.googleMapsAPIWrapper) { return; }

    this.googleMapsAPIWrapper.getBounds().then((bounds: LatLngBounds) => {
      this.boundsChanged.next(bounds);
    });
  }

  public updateMarkers() {
    let newCompanyListIds: Array<number> = [];

    // check for new companies
    this.companyList.forEach((company: Company) => {
      newCompanyListIds.push(company.id);
      if (this.companyIds.indexOf(company.id) === -1) {
        this.activeCompanyList.push(company);
        this.companyIds.push(company.id);
      }
    });

    // check for companies that should be removed
    this.companyIds.forEach((id: any, indexOfCompany: number) => {
      if (newCompanyListIds.indexOf(id) === -1) {

        this.companyIds.splice(indexOfCompany, 1);
        let companyToRemove = this.activeCompanyList.splice(indexOfCompany, 1)[0];
        let indexOfRichMarker: number;
        this.richMarkers.forEach((richMarker: any, index: number) => {
          if (Number((richMarker.getPosition().lat() / companyToRemove.point.lat).toFixed(5)) === 1 &&
              Number((richMarker.getPosition().lng() / companyToRemove.point.lng).toFixed(5)) === 1) {
            indexOfRichMarker = index;
            richMarker.onRemove();
          }
        });
        this.richMarkers.splice(indexOfRichMarker, 1);
      }
    });
  }
}
