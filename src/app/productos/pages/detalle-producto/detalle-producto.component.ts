import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styles: [
  ]
})
export class DetalleProductoComponent implements OnInit {

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDetalleProducto();
  }

  producto!: Producto;

  getDetalleProducto(){
    this.activatedRoute.params
    .pipe(switchMap( ({ id }) => this.productoService.getDetalleProducto(id)))
    .subscribe( response => this.producto = response);
  }

  regresar(){
    this.router.navigate(['/productos/listado-productos']);
  } 

}
