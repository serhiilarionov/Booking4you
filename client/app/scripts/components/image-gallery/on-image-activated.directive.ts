import { Directive, Input, Output, AfterViewInit,
  OnChanges, EventEmitter, SimpleChanges, ElementRef } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[onImageActivated]'
})
export class OnImageActivatedDirective implements AfterViewInit, OnChanges {
  @Input('state') public state: string;
  @Output() public onImageActivated = new EventEmitter<number>();

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if ('state' in changes && changes['state'].currentValue === 'active') {
      this.onImageActivated.next(this.elementRef.nativeElement.height);
    }
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.addEventListener('load', () => {
      if (this.state === 'active') {
        this.onImageActivated.next(this.elementRef.nativeElement.height);
      }
    });
  }
}