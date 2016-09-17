import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoopBackAuth, City, CityApi, Category, CategoryApi, ClientApi } from '../../shared/index';
declare var $: any;

@Component({
  selector: 'hero',
  templateUrl: './scripts/components/hero/hero.component.html',
  styleUrls: ['./scripts/components/hero/hero.component.css']
})

export class HeroComponent implements OnInit {
  public cities: Array<City>;
  public categories: Array<Category>;
  public searchForm: FormGroup;
  constructor(
    private auth: LoopBackAuth,
    private cityApi: CityApi,
    private categoryApi: CategoryApi,
    private clientApi: ClientApi,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.searchForm = this.formBuilder.group({
      city: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.cityApi.find().subscribe((cities: Array<City>) => this.cities = cities);
    this.categoryApi.find().subscribe((categories: Array<Category>) => this.categories = categories);
  }

  onSubmit() {
    if (this.searchForm.valid) {
      let navigationExtras: NavigationExtras = {
        queryParams: this.searchForm.value
      };

      this.router.navigate(['/company-list'], navigationExtras);
    }
  }
}
