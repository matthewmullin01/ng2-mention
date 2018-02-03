import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[mention]'
})
export class MentionDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
    // renderer.setElementAttribute(el.nativeElement, 'class', 'mention-class');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('Mouse Enter');
    this.hover(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('Mouse Leave');

    this.hover(false);
  }
  // Event method to be called on mouse enter and on mouse leave
  hover(shouldUnderline: boolean) {
    if (shouldUnderline) {
      // Mouse enter   this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
    } else {
      // Mouse leave           this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'none');
    }
  }
}
