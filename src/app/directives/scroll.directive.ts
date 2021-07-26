import { Globals } from './../globals';
import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';


@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  @Output() scrollPos:EventEmitter<any> = new EventEmitter()

  state = 'normal'

  constructor(public el: ElementRef, public globals: Globals) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll(): any {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset

    if (scrollPosition >= componentPosition) {
      this.state = 'scrolled'
    } else {
      this.state = 'normal'
    }

    console.log( this.scrollPos.emit(scrollPosition))

  
    

  }


}
