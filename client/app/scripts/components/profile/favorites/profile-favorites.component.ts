import { Component, ViewEncapsulation } from '@angular/core';
import { Company, Client, ClientApi } from '../../../shared/index';

@Component({
  selector: 'profile-favorites',
  templateUrl: 'scripts/components/profile/favorites/profile-favorites.component.html',
  styleUrls: ['scripts/components/profile/favorites/profile-favorites.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileFavoritesComponent {
  public companyList: Array<Company>;
  private currentUser: Client;
  constructor(  private clientApi: ClientApi ) {
    this.currentUser = this.clientApi.getCachedCurrent();
  }

  ngOnInit() {
    this.clientApi.getCompanies(this.currentUser.id).subscribe((data) => {
      this.companyList = data;
    });
  }
}
