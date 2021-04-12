import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainOrdenesComponent } from './pages/main-ordenes/main-ordenes.component';
import { ListadoOrdenesComponent } from './pages/listado-ordenes/listado-ordenes.component';
import { DetalleOrdenComponent } from './pages/detalle-orden/detalle-orden.component';
import { AgregarOrdenComponent } from './pages/agregar-orden/agregar-orden.component';

const routes: Routes = [
  {
    path: '',
    component: MainOrdenesComponent,
    children: [
      { path: 'listado-ordenes', component: ListadoOrdenesComponent },
      { path: 'detalle-orden',   component: DetalleOrdenComponent   },
      { path: 'agregar-orden',   component: AgregarOrdenComponent   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenesRoutingModule { }
