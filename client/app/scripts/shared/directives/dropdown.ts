import { Component, Input, Output, ElementRef, AfterViewInit, AfterViewChecked, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
  selector: 'select.selectpicker',
  templateUrl: 'scripts/shared/directives/dropdown.html'
})
export class Dropdown implements AfterViewChecked, AfterViewInit {
  @Input() public items: any[];
  @Output() public onSelected = new EventEmitter();
  private $el: any;

  constructor(private el: ElementRef) {
    this.$el = $(this.el.nativeElement);
  }

  ngAfterViewInit() {
    this.$el.selectpicker();
    this.$el.on('changed.bs.select', () => {
      this.onSelected.next(this.$el.selectpicker('val'));
    });
  }

  ngAfterViewChecked() {
    this.$el.selectpicker('refresh');
  }
}
