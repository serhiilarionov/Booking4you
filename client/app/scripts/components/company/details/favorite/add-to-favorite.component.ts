import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Client, ClientApi, AuthService } from '../../../../shared/index';

@Component({
  selector: 'add-to-favorite',
  templateUrl: 'scripts/components/company/details/favorite/add-to-favorite.component.html',
  styleUrls: ['scripts/components/company/details/favorite/add-to-favorite.component.css']
})

export class CompanyAddToUserFavorite implements OnInit {
  public currentUser: Client;
  public isAdded: boolean = false;
  @Input() companyId: number;

  constructor(
    private clientApi: ClientApi,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {
    this.currentUser = this.clientApi.getCachedCurrent();

    this.auth.currentUser.subscribe((user: Client) => {
      this.currentUser = user;
    });

    this.route.params.subscribe((params: Params) => {
      this.isAdded = false;
      this.companyId = params['id'];
      this.checkForFavoriteExists();
    });
  }

  ngOnInit() {
    this.checkForFavoriteExists();
  }

  checkForFavoriteExists() {
    if (!this.currentUser) {
      return;
    }
    this.clientApi.existsCompanies(this.currentUser.id, this.companyId).subscribe(() => {
      this.isAdded = true;
    }, (error) => {
      return;
    });
  }

  toggleFavorite() {
    if (this.isAdded) {
      this.clientApi.unlinkCompanies(this.currentUser.id, this.companyId).subscribe(() => {
        this.isAdded = false;
      });
      return;
    }

    this.clientApi.linkCompanies(this.currentUser.id, this.companyId).subscribe(() => {
      this.isAdded = true;
    });
  }
}

