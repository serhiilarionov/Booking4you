import { Component, Input, OnInit, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'select.selectpicker',
  templateUrl: 'scripts/common/directives/dropdown.html'
})
export class Dropdown implements OnInit {
  @Input() items: any[];
  private $el: any;

  constructor(private el: ElementRef) {
    this.$el = $(this.el.nativeElement);
  }

  ngOnInit() {
    this.$el.ready(() => this.$el.selectpicker('refresh'));
  }
}
