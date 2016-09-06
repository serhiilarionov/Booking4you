import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SidebarService } from '../../shared/index';
import { MenuBranch } from './menu-branch.component';
declare var $: any;

const MENU_TREE: Array<MenuBranch> = [
  {
    name: 'Home',
    link: ''
  },
  {
    name: 'Company list',
    link: 'company-list'
  },
  {
    name: 'alo',
    link: '',
    children: [
      {
        name: 'alo2',
        link: ''
      }
    ]
  }
];

@Component({
  selector: 'sidebar',
  styleUrls: ['scripts/parts/sidebar/sidebar.component.css'],
  templateUrl: 'scripts/parts/sidebar/sidebar.component.html',
  encapsulation: ViewEncapsulation.None
})

export class SidebarComponent {
  public menuTree = MENU_TREE;
  private $el: any;

  constructor(private sidebar: SidebarService, private el: ElementRef) {
    this.$el = $(el.nativeElement);
    sidebar.toggled$.subscribe(() => this.toggle());
  }

  toggle() {
    this.$el.toggleClass('active');
  }
}
