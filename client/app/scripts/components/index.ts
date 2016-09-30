import { LoginFormComponent } from './auth/login-form.conponent';
import { RegistrationFormComponent } from './auth/registration-form.conponent';
import { CompanyListComponent } from './company/list/company-list.component';
import { CompanyCardComponent } from './company/card/company-card.component';
import { CompanyModalComponent } from './company/modal/company-modal.component';
import { HeroComponent } from './hero/hero.component';
import { GmapComponent } from './gmap/gmap.component';
import { OnMapLoaded } from './gmap/directives/on-map-loaded.directive';
import { OnMarkerLoaded } from './gmap/directives/on-marker-loaded.directive';
import { GmapMarkerClusterer } from './gmap/gmap-marker-clusterer';
// import { GmapInfoboxComponent } from './gmap/gmap-infobox.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { OnImageActivatedDirective } from './image-gallery/on-image-activated.directive';
import { NearbyCompanies } from './company/details/nearby/nearby-companies.component';
import { CompanyAddToUserFavorite } from './company/details/favorite/add-to-favorite.component';
import { CompanyFilterComponent } from './company/filter/company-filter.component';

export { LoginFormComponent } from './auth/login-form.conponent';
export { RegistrationFormComponent } from './auth/registration-form.conponent';
export { CompanyListComponent } from './company/list/company-list.component';
export { CompanyCardComponent } from './company/card/company-card.component';
export { CompanyModalComponent } from './company/modal/company-modal.component';
export { HeroComponent } from './hero/hero.component';
export { GmapComponent } from './gmap/gmap.component';
export { OnMapLoaded } from './gmap/directives/on-map-loaded.directive';
export { OnMarkerLoaded } from './gmap/directives/on-marker-loaded.directive';
export { GmapMarkerClusterer } from './gmap/gmap-marker-clusterer';
// export { GmapInfoboxComponent } from './gmap/gmap-infobox.component';
export { CommingSoonComponent } from './comming-soon/comming-soon.component';
export { ImageGalleryComponent } from './image-gallery/image-gallery.component';
export { OnImageActivatedDirective } from './image-gallery/on-image-activated.directive';
export { NearbyCompanies } from './company/details/nearby/nearby-companies.component';
export { CompanyAddToUserFavorite } from './company/details/favorite/add-to-favorite.component';
export { CompanyFilterComponent } from './company/filter/company-filter.component';

export const Components: Array<any> = [
  LoginFormComponent,
  RegistrationFormComponent,
  CompanyListComponent,
  CompanyCardComponent,
  CompanyModalComponent,
  CompanyFilterComponent,
  HeroComponent,
  GmapComponent,
  OnMapLoaded,
  OnMarkerLoaded,
  GmapMarkerClusterer,
  // GmapInfoboxComponent,
  CommingSoonComponent,
  ImageGalleryComponent,
  OnImageActivatedDirective,
  CommingSoonComponent,
  NearbyCompanies,
  CompanyAddToUserFavorite
];
