import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProductosComponent } from './pages/main-productos/main-productos.component';
import { ListadoProductosComponent } from './pages/listado-productos/listado-productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';

const routes: Routes = [
  {
    path: '',
    component: MainProductosComponent,
    children: [
      { path: 'listado-productos',  component: ListadoProductosComponent },
      { path: 'detalle-producto',   component: DetalleProductoComponent  },
      { path: 'agregar-producto',   component: AgregarProductoComponent  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
