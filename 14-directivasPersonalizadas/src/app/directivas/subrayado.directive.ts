import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {

  @Input('appSubrayado') config: any;

  @HostBinding('class') isHover: string;

  constructor(private elem: ElementRef, private renderer: Renderer2) { 
    //PARA ALGUNAS PLATAFORMAS
    // this.elem.nativeElement.style.textDecoration = "underline";
    //PARA TODAS LAS PLATAFORMAS MOVIL, WEB, ESCRITORIO...
    this.renderer.setStyle(elem.nativeElement, 'text-decoration', 'underline');
    this.config= {
      colorHover: 'green',
      colorNoHover: 'red'
    }
  }

  @HostListener('mouseover') onHover(){
    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config.colorHover);
    this.isHover = 'hover'
  }

  @HostListener('mouseout') onMouseOut(){
    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config.colorNoHover);
    this.isHover = 'noHover'
  }
}
