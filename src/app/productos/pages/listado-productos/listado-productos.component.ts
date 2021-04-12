import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styles: [
  ]
})
export class ListadoProductosComponent implements OnInit {

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }

  productos!: Producto[];

  getProductos(){
    this.productoService.getListadoProductos().subscribe(
      response => this.productos = response
    )
  }

  crearProducto(){
    this.router.navigate(['/productos/agregar-producto']);
  }

}
