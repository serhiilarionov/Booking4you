import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router, Params } from '@angular/router';
import { City, CityApi, Category, CategoryApi } from '../../../shared/index';

@Component({
  selector: 'company-filter',
  templateUrl: 'scripts/components/company/filter/company-filter.component.html',
  styleUrls: ['scripts/components/company/filter/company-filter.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CompanyFilterComponent implements OnInit {
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
      this.navigationExtras.queryParams = Object.assign({}, params);
    });

  }

  onCitySelected(cityId) {
    this.navigationExtras.queryParams['cityId'] = cityId;
    this.navigateAfterSelected();
  }

  onCategorySelected(categoryId) {
    this.navigationExtras.queryParams['categoryId'] = categoryId;
    this.navigateAfterSelected();
  }

  navigateAfterSelected () {
    this.router.navigate(['/company-list'], this.navigationExtras);
  }
}
