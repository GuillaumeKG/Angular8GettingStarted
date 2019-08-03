import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('color') highlightColor: string = 'yellow';

    constructor(private el: ElementRef) {
    }

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.highlightColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }

    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
}