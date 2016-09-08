import { Directive, OnInit, ElementRef, AfterViewChecked } from '@angular/core';
declare var Ps: any;

@Directive({
  selector: '[perfect-scrollbar]'
})

export class PerfectScrollbarDirective implements OnInit, AfterViewChecked {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    Ps.initialize(this.elementRef.nativeElement, {
      wheelPropagation: true,
      theme: 'booking',
      suppressScrollX: true
    });
  }

  ngAfterViewChecked() {
    Ps.update(this.elementRef.nativeElement);
  }
}
