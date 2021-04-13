import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[mensajeError]'
})
export class ErrorMsgDirective implements OnInit{

  htmlElement: ElementRef<HTMLElement>;

  constructor( private element: ElementRef<HTMLElement> ) {
    this.htmlElement = element;
  }

  ngOnInit(): void {
    this.setValues();  
  }

  setValues():void{
    this.htmlElement.nativeElement.className="m-0 p-0 text-danger";
  }

}
