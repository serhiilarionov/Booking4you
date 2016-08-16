import {Component, ElementRef, ViewEncapsulation} from '@angular/core';
import {SidebarService} from './sidebar.service';
import {MenuBranch, IMenuBranch} from './menu-branch.component';
declare var $: any;

const MENU_TREE: Array<IMenuBranch> = [
  {
    name: 'Home',
    link: ''
  },
  {
    name: 'About',
    link: '',
    children: [
      {
        name: 'Company',
        link: ''
      },
      {
        name: 'Partnership',
        link: '',
        children: [
          {
            name: 'Third level',
            link: '',
            children: [
              {
                name: 'Lorem',
                link: ''
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Home',
    link: ''
  },
  {
    name: 'About',
    link: '',
    children: [
      {
        name: 'Company',
        link: ''
      },
      {
        name: 'Partnership',
        link: '',
        children: [
          {
            name: 'Third level',
            link: ''
          }
        ]
      }
    ]
  },
  {
    name: 'Home',
    link: ''
  },
  {
    name: 'About',
    link: '',
    children: [
      {
        name: 'Company',
        link: ''
      },
      {
        name: 'Partnership',
        link: '',
        children: [
          {
            name: 'Third level',
            link: ''
          }
        ]
      }
    ]
  },
  {
    name: 'Home',
    link: ''
  },
  {
    name: 'About',
    link: '',
    children: [
      {
        name: 'Company',
        link: ''
      },
      {
        name: 'Partnership',
        link: '',
        children: [
          {
            name: 'Third level',
            link: ''
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'sidebar',
  styleUrls: ['scripts/parts/sidebar/sidebar.component.css'],
  templateUrl: 'scripts/parts/sidebar/sidebar.component.html',
  encapsulation: ViewEncapsulation.None,
  directives: [MenuBranch]
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
