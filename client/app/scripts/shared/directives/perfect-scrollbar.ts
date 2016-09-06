import { Directive, OnInit, ElementRef } from '@angular/core';
declare var Ps: any;

@Directive({
  selector: '[perfect-scrollbar]'
})

export class PerfectScrollbarDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    Ps.initialize(this.elementRef.nativeElement, {
      wheelPropagation: true
    });
  }
}
