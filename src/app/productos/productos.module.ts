import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module';
import { MainProductosComponent } from './pages/main-productos/main-productos.component';
import { ListadoProductosComponent } from './pages/listado-productos/listado-productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainProductosComponent,
    ListadoProductosComponent,
    DetalleProductoComponent,
    AgregarProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
