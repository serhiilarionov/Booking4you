import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component'

@Component({
  selector: '[home-page][id=page-content]',
  templateUrl: 'scripts/pages/home/home-page.component.html',
  directives: [HeroComponent]
})

export class HomePageComponent {}
