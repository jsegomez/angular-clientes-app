import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainClientesComponent } from './pages/main-clientes/main-clientes.component';
import { ListadoClientesComponent } from './pages/listado-clientes/listado-clientes.component';
import { DetalleClienteComponent } from './pages/detalle-cliente/detalle-cliente.component';
import { AgregarClienteComponent } from './pages/agregar-cliente/agregar-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: MainClientesComponent,
    children: [
      { path: 'listado-clientes',     component: ListadoClientesComponent },
      { path: 'detalle-cliente/:id',  component: DetalleClienteComponent  },
      {path: 'agregar-cliente',       component: AgregarClienteComponent  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
