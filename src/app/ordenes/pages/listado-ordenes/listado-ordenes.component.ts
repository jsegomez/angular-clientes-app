import { Component, OnInit } from '@angular/core';

import { Orden } from '../../interfaces/orden.interface';
import { OrdenesService } from '../../services/ordenes.service';


@Component({
  selector: 'app-listado-ordenes',
  templateUrl: './listado-ordenes.component.html',
  styles: [
  ]
})
export class ListadoOrdenesComponent implements OnInit{

  constructor(
    private ordenesService: OrdenesService
  ) { }

  ngOnInit(): void {
    this.cargarOrdenes();    
  }

  ordenes!: Orden[];

  cargarOrdenes(): void{
    this.ordenesService.getListadoOrdenes().subscribe(
      response => this.ordenes = response
    );
  } 
}
