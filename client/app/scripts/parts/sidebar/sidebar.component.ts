import {Component, ElementRef, ViewEncapsulation} from '@angular/core';
import {SidebarService} from './sidebar.service';
declare var $:any;

@Component({
  selector: 'sidebar',
  styleUrls: ['scripts/parts/sidebar/sidebar.component.css'],
  templateUrl: 'scripts/parts/sidebar/sidebar.component.html',
  encapsulation: ViewEncapsulation.None
})

export class SidebarComponent {
  private $el: any;
  constructor(private sidebar:SidebarService, private el: ElementRef) {
    this.$el = $(el.nativeElement);
    sidebar.toggled$.subscribe(()=> this.toggle());
  }

  toggle() {
    this.$el.toggleClass('active');
  }
}
