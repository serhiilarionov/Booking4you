import { Component, ViewEncapsulation } from '@angular/core';
import { Company, Client, ClientApi, Category, CategoryApi } from '../../../shared/index';
declare var $: any;

@Component({
  selector: 'profile-favorites',
  templateUrl: 'scripts/pages/profile/favorites/profile-favorites.component.html',
  styleUrls: ['scripts/pages/profile/favorites/profile-favorites.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileFavoritesComponent {
  public companyList: Array<Company>;
  public categoryList: Array<Category>;
  public categoryIdList: Array<number> = [];
  public selectedCategory: number;
  public filter: any = {where: {id: {inq: []}}};
  private currentUser: Client;

  constructor(private clientApi: ClientApi, private categoryApi: CategoryApi) {
    this.currentUser = this.clientApi.getCachedCurrent();
  }

  ngOnInit() {
    this.clientApi.getCompanies(this.currentUser.id)
      .subscribe((companyList: Array<Company>) => {
        this.companyList = companyList;

        if (this.companyList.length) {
          Object.keys(this.companyList).map((company) => {
            if (this.categoryIdList.indexOf(this.companyList[company]['categoryId']) === -1) {
              this.categoryIdList.push(this.companyList[company]['categoryId']);
            }
          });
          this.filter.where.id.inq = this.categoryIdList;
          this.getCategories();
        }
      });
  }

  getCategories() {
    this.categoryApi.find(this.filter)
      .subscribe((categoryList: Array<Category>) => {
        this.categoryList = categoryList;
      });
  }
}
