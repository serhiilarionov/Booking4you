import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { SidebarService } from '../../shared/index';
import { MenuBranch } from './menu-branch.component';
declare var $: any;

const MENU_TREE: Array<MenuBranch> = [
  {
    name: 'Главная',
    link: ''
  },
  {
    name: 'Список компаний',
    link: 'company-list'
  }
];

@Component({
  selector: 'sidebar',
  styleUrls: ['./sidebar.component.css'],
  templateUrl: './sidebar.component.html',
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
