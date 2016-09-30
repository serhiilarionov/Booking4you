import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router, Params } from '@angular/router';
import { City, CityApi, Category, CategoryApi } from '../../../shared/index';

@Component({
  selector: 'company-filter',
  templateUrl: 'scripts/components/company/filter/company-filter.component.html',
  styleUrls: ['scripts/components/company/filter/company-filter.component.css']
})

export class CompanyFilterComponent implements OnInit {
  public filter: any = { where: { cityId: null, categoryId: null }, limit: 100 };
  public navigationExtras: NavigationExtras = { queryParams: {} };
  public cityList: Array<City>;
  public categoryList: Array<Category>;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private cityApi: CityApi,
    private categoryApi: CategoryApi,
  ) {}

  ngOnInit() {
    this.cityApi.find().subscribe((cityList: Array<City>) => {
      this.cityList = cityList;
    });
    this.categoryApi.find().subscribe((categoryList: Array<Category>) => {
      this.categoryList = categoryList;
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.filter.where = {
        cityId: params['city'],
        categoryId: params['category']
      };
    });

  }

  onCitySelected(cityId) {
    this.filter.where.cityId = cityId;
    this.navigateAfterSelected();
  }

  onCategorySelected(categoryId) {
    this.filter.where.categoryId = categoryId;
    this.navigateAfterSelected();
  }

  navigateAfterSelected () {
    this.navigationExtras.queryParams = {
      category: this.filter.where.categoryId,
      city: this.filter.where.cityId
    };

    this.router.navigate(['/company-list'], this.navigationExtras);

  }
}
