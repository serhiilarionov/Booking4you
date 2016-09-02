import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoopBackAuth, City, CityApi, ClientApi } from '../../shared/index';
declare var $: any;

@Component({
  selector: 'hero',
  templateUrl: './scripts/components/hero/hero.component.html',
  styleUrls: ['./scripts/components/hero/hero.component.css']
})

export class HeroComponent implements OnInit {
  public cities: Array<City>;
  public searchForm: FormGroup;
  constructor(
    private auth: LoopBackAuth,
    private cityApi: CityApi,
    private clientApi: ClientApi,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      city: [''],
      category: ['']
    });
  }

  ngOnInit() {
    if (this.clientApi.isAuthenticated()) {
      this.cityApi.find().subscribe((cities: Array<City>) => this.cities = cities);
    }
  }
}
