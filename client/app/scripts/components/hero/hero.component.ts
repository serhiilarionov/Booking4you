import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'section.hero-image.search-filter-middle.height-500',
  templateUrl: './scripts/components/hero/hero.component.html',
  styleUrls: ['./scripts/components/hero/hero.component.css']
})

export class HeroComponent implements OnInit {
  ngOnInit() {
    $('.selectpicker').selectpicker();
  }
}
