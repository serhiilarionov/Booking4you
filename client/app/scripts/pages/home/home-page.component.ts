import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component'

@Component({
  selector: 'home-page',
  templateUrl: 'scripts/pages/home/home-page.component.html',
  directives: [HeroComponent]
})

export class HomePageComponent {}
