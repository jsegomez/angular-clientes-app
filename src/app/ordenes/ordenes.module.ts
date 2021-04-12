import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenesRoutingModule } from './ordenes-routing.module';
import { ListadoOrdenesComponent } from './pages/listado-ordenes/listado-ordenes.component';
import { DetalleOrdenComponent } from './pages/detalle-orden/detalle-orden.component';
import { AgregarOrdenComponent } from './pages/agregar-orden/agregar-orden.component';
import { MainOrdenesComponent } from './pages/main-ordenes/main-ordenes.component';

@NgModule({
  declarations: [          
    MainOrdenesComponent,
    DetalleOrdenComponent,
    AgregarOrdenComponent,
    ListadoOrdenesComponent,
  ],
  imports: [
    CommonModule,
    OrdenesRoutingModule
  ]
})
export class OrdenesModule { }