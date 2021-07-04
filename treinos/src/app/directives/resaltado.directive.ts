import { Directive, ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef ) {

    console.log('Directiva Chamada');

    this.novaCor = '';

  }
  
  @Input("appResaltado") novaCor:string;
  

  //Quando passar o mouse mudar de color
  @HostListener('mouseenter') mouseEntrou() {

    this.resaltar( this.novaCor || 'yellow')

  }
  
  @HostListener('mouseleave') mouseSaio() {

    this.el.nativeElement.style.backgroundColor = null;

  //  this.resaltar( null );

  }


  private resaltar(color: string) {

    this.el.nativeElement.style.backgroundColor = color;
    
  }


}
