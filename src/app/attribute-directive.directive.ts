import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]'
})
export class AttributeDirectiveDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'yellow';
  }
  @Input() defaultColor: string;
  @Input('appAttributeDirective') highlightColor: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight( this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
