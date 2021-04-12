import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';

import { SharedModule } from '../shared/shared.module';
import { MainClientesComponent } from './pages/main-clientes/main-clientes.component';
import { ListadoClientesComponent } from './pages/listado-clientes/listado-clientes.component';
import { DetalleClienteComponent } from './pages/detalle-cliente/detalle-cliente.component';
import { AgregarClienteComponent } from './pages/agregar-cliente/agregar-cliente.component';

@NgModule({
  declarations: [
    MainClientesComponent,
    ListadoClientesComponent,
    DetalleClienteComponent,
    AgregarClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
