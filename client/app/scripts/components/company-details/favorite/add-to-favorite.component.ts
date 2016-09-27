import {Component, Input, Inject, OnInit} from '@angular/core';
import {Client, ClientApi, EventTypes, Broadcaster} from '../../../shared/index';

@Component({
  selector: 'add-to-favorite',
  templateUrl: 'scripts/components/company-details/favorite/add-to-favorite.component.html',
  styleUrls: ['scripts/components/company-details/favorite/add-to-favorite.component.css']
})

export class CompanyAddToUserFavorite implements OnInit {
  public currentUser: Client;
  public addToFavoriteState: boolean = false;
  @Input() companyId: number;

  constructor(private clientApi: ClientApi,
              @Inject(Broadcaster) private broadcaster: Broadcaster<string>) {
    this.currentUser = this.clientApi.getCachedCurrent();
    this.broadcaster.subscribe((eventType) => {
      if (eventType === EventTypes.LOGGED_IN) {
        this.currentUser = this.clientApi.getCachedCurrent();
      }
    });
  }

  ngOnInit() {
    this.checkForFavoriteExists();
  }

  checkForFavoriteExists() {
    if (!this.currentUser) {
      return;
    }
    this.clientApi.existsCompanies(this.currentUser.id, this.companyId).subscribe((data) => {
        this.addToFavoriteState = true;
      }, (error) => {
        this.addToFavoriteState = false;
      }
    );
  }

  addToFavorite() {
    this.clientApi.linkCompanies(this.currentUser.id, this.companyId).subscribe(() => {
      this.addToFavoriteState = true;
    });
  }

  removeFromFavorite() {
    this.clientApi.unlinkCompanies(this.currentUser.id, this.companyId).subscribe(() => {
      this.addToFavoriteState = false;
    });
  }
}

