import { Component, Input, Output, ElementRef,
  AfterViewInit, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
declare var $: any;

@Component({
  selector: 'select.selectpicker',
  templateUrl: 'scripts/shared/directives/dropdown.html'
})
export class Dropdown implements OnChanges, AfterViewInit {
  @Input() public items: any[];
  @Input() public selected: any;
  @Input() public width: string;
  @Output() public onSelected = new EventEmitter();
  private $el: any;

  constructor(private el: ElementRef) {
    this.$el = $(this.el.nativeElement);
  }

  ngAfterViewInit() {
    this.$el.selectpicker({width: this.width});
    this.$el.on('changed.bs.select', () => {
      this.onSelected.next(this.$el.selectpicker('val'));
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['items'] || !changes['items'].currentValue) { return; }

    // TODO: Remove setTimeout with normal lifecycle hook such as AfterViewChecked. Now setTimeout here because scrollbar makes ngAfterViewChecked infinite.
    setTimeout(() => {
      this.$el.selectpicker('refresh');
    }, 1000);
  }
}
