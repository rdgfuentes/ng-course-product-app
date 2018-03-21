import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]'
})
export class HighlightElementDirective {

  @HostBinding('style.box-shadow') boxShadow;
  
  constructor() { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.boxShadow = '0px 3px 0px 6px grey';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.boxShadow = '';
  }
}
