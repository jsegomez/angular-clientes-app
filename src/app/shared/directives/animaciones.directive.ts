import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[fadeIn]'
})
export class AnimacionesDirective implements OnInit{

  htmlElement: ElementRef<HTMLElement>;

  constructor( private element: ElementRef<HTMLElement> ){
    this.htmlElement = element;
  }
  
  ngOnInit(): void { 
    this.setClases();   
  }

  setClases():void {
    this.htmlElement.nativeElement.className="animate__animated animate__fadeIn";
  }
}
