import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { Company, CompanyApi, City, CityApi, Category, CategoryApi } from '../../shared/index';

@Component({
  selector: 'company-list',
  templateUrl: 'scripts/components/company/company-list.component.html',
  styleUrls: ['scripts/components/company/company-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyListComponent implements OnInit {
  public selectedCompany: Company;
  public companyList: Array<Company>;
  public cityList: Array<City>;
  public categoryList: Array<Category>;
  @Output() public companyListLoaded = new EventEmitter<Array<Company>>();
  public filter: any = {where: {cityId: null, categoryId: null}};
  public navigationExtras: NavigationExtras = {queryParams: {}};

  constructor(
    private companyApi: CompanyApi,
    private cityApi: CityApi,
    private categoryApi: CategoryApi,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.filter.where = {
      cityId: this.route.snapshot.queryParams['city'],
      categoryId: this.route.snapshot.queryParams['category']
    };
  }

  // OnInit we should get cities and categories for filters
  ngOnInit() {
    this.cityApi.find().subscribe((cityList: Array<City>) => {
      this.cityList = cityList;
    });
    this.categoryApi.find().subscribe((categoryList: Array<Category>) => {
      this.categoryList = categoryList;
    });

    this.getCompanyList();
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
    this.getCompanyList();
  }

  getCompanyList() {
    // Get companyList only when city and category filters are checked
    if (this.filter.where.cityId && this.filter.where.categoryId) {
      this.companyApi.find(this.filter).subscribe((companyList: Array<Company>) => {
        this.companyList = companyList;
        this.companyListLoaded.next(this.companyList);
      });
    }
  }
}
