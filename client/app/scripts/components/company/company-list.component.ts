import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Company, CompanyApi, City, CityApi, Category, CategoryApi } from '../../shared/index';

@Component({
  selector: 'company-list',
  templateUrl: 'scripts/components/company/company-list.component.html',
  styleUrls: ['scripts/components/company/company-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyListComponent implements OnInit {
  public companyList: Array<Company>;
  public cityList: Array<City>;
  public categoryList: Array<Category>;
  @Output() public companyListLoaded = new EventEmitter<Array<Company>>();
  private filter: any = {where: {cityId: null, categoryId: null}};

  constructor(
    private companyApi: CompanyApi,
    private cityApi: CityApi,
    private categoryApi: CategoryApi
  ) {}

  // OnInit we should get cities and categories for filters
  ngOnInit() {
    this.cityApi.find().subscribe((cityList: Array<City>) => {
      this.cityList = cityList;
    });
    this.categoryApi.find().subscribe((categoryList: Array<Category>) => {
      this.categoryList = categoryList;
    });
  }

  onCitySelected(cityId) {
    this.filter.where.cityId = cityId;
    this.getCompanyList();
  }

  onCategorySelected(categoryId) {
    this.filter.where.categoryId = categoryId;
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
