import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCourceHighlight]'
})
export class CourceHighlightDirective implements OnChanges {
  @Input('appCourceHighlight') courceCreationDate: Date = new Date();
  daysCourceNew: number = 14;
  currentDate: Date;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.currentDate = new Date()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeBordre();
  }

  changeBordre(){
    const currentDate = new Date(Date.now());
    const rangeDate = new Date(new Date().setDate(currentDate.getDate() - this.daysCourceNew));
    if (this.courceCreationDate < currentDate && this.courceCreationDate >= rangeDate) {
      this.renderer.setStyle(this.element.nativeElement, 'border','2px solid #79F30F' );
    } else if (this.courceCreationDate > currentDate) {
      this.renderer.setStyle(this.element.nativeElement, 'border','2px solid blue' );
    }
  }
}
