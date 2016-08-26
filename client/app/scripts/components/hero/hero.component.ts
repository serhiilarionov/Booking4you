import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'hero',
  templateUrl: './scripts/components/hero/hero.component.html',
  styleUrls: ['./scripts/components/hero/hero.component.css']
})

export class HeroComponent {
  private cities: any[] = [
    {
      'id': 1,
      'slug': 'kryvyi-rih',
      'name': 'Кривий Ріг',
      'active': true,
      'point': {
        'lng': 47.910483,
        'lat': 33.391783
      },
      'bound': null,
      'regionId': 3
    },
    {
      'id': 2,
      'slug': 'dnipropetrovsk',
      'name': 'Дніпропетровськ',
      'active': true,
      'point': {
        'lng': 48.464717,
        'lat': 35.046183
      },
      'bound': null,
      'regionId': 3
    },
    {
      'id': 3,
      'slug': 'kyiv',
      'name': 'Київ',
      'active': true,
      'point': {
        'lng': 50.4501,
        'lat': 30.5234
      },
      'bound': null,
      'regionId': 9
    }
  ];

  private categories: any[] = [
    {
      'id': 1,
      'name': 'car',
      'slug': 'car',
      'parentId': 0,
      'icon': 'local_shipping',
      'position': 0,
      'active': true
    },
    {
      'id': 2,
      'name': 'leisure',
      'slug': 'leisure',
      'parentId': 0,
      'icon': 'tag_faces',
      'position': 1,
      'active': true
    },
    {
      'id': 3,
      'name': 'beauty',
      'slug': 'beauty',
      'parentId': 0,
      'icon': 'palette',
      'position': 2,
      'active': true
    },
    {
      'id': 4,
      'name': 'health',
      'slug': 'health',
      'parentId': 0,
      'icon': 'healing',
      'position': 3,
      'active': true
    },
    {
      'id': 21,
      'name': 'car-wash',
      'slug': 'car-wash',
      'parentId': 1,
      'icon': 'local_car_wash',
      'position': 1,
      'active': true
    },
    {
      'id': 22,
      'name': 'billiards',
      'slug': 'billiards',
      'parentId': 2,
      'icon': 'hdr_weak',
      'position': 1,
      'active': true
    },
    {
      'id': 23,
      'name': 'bowling',
      'slug': 'bowling',
      'parentId': 2,
      'icon': 'lens',
      'position': 2,
      'active': true
    },
    {
      'id': 24,
      'name': 'service-stations',
      'slug': 'service-stations',
      'parentId': 1,
      'icon': 'gears',
      'position': 2,
      'active': true
    }
  ];
}
