import { Component, OnInit } from '@angular/core';
import { LoopBackAuth, City, CityApi, ClientApi } from '../../shared/index';
declare var $: any;

@Component({
  selector: 'hero',
  templateUrl: './scripts/components/hero/hero.component.html',
  styleUrls: ['./scripts/components/hero/hero.component.css']
})

export class HeroComponent implements OnInit {
  public cities: Array<City>;
  constructor(private auth: LoopBackAuth, private cityApi: CityApi, private clientApi: ClientApi) {
  }

  ngOnInit() {
    if (this.clientApi.isAuthenticated()) {
      this.cityApi.find().subscribe((cities: Array<City>) => this.cities = cities);
    }
  }
}
