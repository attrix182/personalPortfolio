
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseHover]'
})
export class MouseHoverDirective {


  public entro: boolean | undefined;

  constructor(private element: ElementRef) {

  }


  @HostListener('mouseleave') onMouseExit() {

    // this.borde()
    if (!this.entro) {
      this.element.nativeElement.style.border = '';
    }



  }


  @HostListener('mouseenter') onMouseEnter() {


    this.borde()

  }

  @HostListener('click') onClick() {

    this.entro = true;
    //this.activo()

  }




  private borde() {
    
    this.element.nativeElement.style.border = '4px solid #0A192F';

  }


}