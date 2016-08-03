import { Component, ElementRef, ViewEncapsulation, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from './parts/header/header.component'
import { FooterComponent } from './parts/footer/footer.component';
import { SidebarComponent } from './parts/sidebar/sidebar.component';
import { SidebarService } from './parts/sidebar/sidebar.service';
declare var $: any;

@Component({
  selector: 'app',
  templateUrl: 'scripts/app.component.html',
  styleUrls: ['scripts/app.component.css'],
  directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent, SidebarComponent],
  encapsulation: ViewEncapsulation.None,
  providers: [SidebarService]
})

export class AppComponent implements OnInit {
  private $el: any;
  constructor(private sidebar: SidebarService, private el: ElementRef) {
    this.$el = $(el.nativeElement);
  }

  ngOnInit() {
    this.sidebar.toggled$.subscribe(() => this.$el.toggleClass('sidebar-opened'));
  }
}
