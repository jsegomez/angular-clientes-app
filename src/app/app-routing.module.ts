import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'ordenes',    loadChildren: () => import('./ordenes/ordenes.module').then(m => m.OrdenesModule) },
  { path: 'clientes',   loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) },
  { path: 'productos',  loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) },
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
