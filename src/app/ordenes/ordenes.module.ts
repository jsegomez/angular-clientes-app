import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { OrdenesRoutingModule } from './ordenes-routing.module';
import { ListadoOrdenesComponent } from './pages/listado-ordenes/listado-ordenes.component';
import { DetalleOrdenComponent } from './pages/detalle-orden/detalle-orden.component';
import { AgregarOrdenComponent } from './pages/agregar-orden/agregar-orden.component';
import { MainOrdenesComponent } from './pages/main-ordenes/main-ordenes.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [          
    MainOrdenesComponent,
    DetalleOrdenComponent,
    AgregarOrdenComponent,
    ListadoOrdenesComponent,
  ],
  imports: [
    CommonModule,
    OrdenesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrdenesModule { }
