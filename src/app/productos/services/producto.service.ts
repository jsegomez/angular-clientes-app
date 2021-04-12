import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private http: HttpClient
  ) { }

  private _urlBase: string = `${environment.urlBase}/productos`;

  getDetalleProducto(idProducto: string): Observable<Producto>{
    return this.http.get<Producto>(`${this._urlBase}/${idProducto}`);
  }

  getListadoProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this._urlBase);
  }

  registrarProducto(produto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this._urlBase, produto);
  }

}
