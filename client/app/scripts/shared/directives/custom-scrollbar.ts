import { Input, Directive, OnInit, ElementRef } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[custom-scrollbar]',
})

export class CustomScrollbarDirective implements OnInit {
  public defaultTheme: string = 'minimal-dark';
  @Input('custom-scrollbar-theme') public theme: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    $(this.elementRef.nativeElement).mCustomScrollbar({
      theme: this.theme || this.defaultTheme,
      scrollInertia: 600,
      mouseWheel: { scrollAmount: 350 }
    });
  }
}
