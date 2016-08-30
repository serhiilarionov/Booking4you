import { Component, Input, OnChanges, OnInit, ElementRef, SimpleChanges } from '@angular/core';
declare var $: any;

@Component({
  selector: 'select.selectpicker',
  templateUrl: 'scripts/shared/directives/dropdown.html'
})
export class Dropdown implements OnInit, OnChanges {
  @Input() items: any[];
  private $el: any;

  constructor(private el: ElementRef) {
    this.$el = $(this.el.nativeElement);
  }

  ngOnInit() {
    this.$el.selectpicker();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.$el.ready(() => this.$el.selectpicker('refresh'));
  }
}
