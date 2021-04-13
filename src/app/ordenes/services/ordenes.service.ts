import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Orden } from '../interfaces/orden.interface';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(
    private http: HttpClient
  ) { }

  private _urlBase = `${environment.urlBase}/ordenes`;

  getDetalleOrden(idOrden: string): Observable<Orden>{
    return this.http.get<Orden>(`${this._urlBase}/${idOrden}`).pipe(
      catchError( e => {
        this.throwErrorCustom('Error al cargar orden');
        return throwError(e);
      })
    );
  }

  getListadoOrdenes(): Observable<Orden[]>{
    return this.http.get<Orden[]>(this._urlBase).pipe(
      catchError( e => {
        this.throwErrorCustom('Error al cargar ordenes');
        return throwError(e);
      })
    );
  }

  crearOrden(orden: Orden): Observable<Orden>{
    return this.http.post<Orden>(this._urlBase, orden).pipe(
      catchError( e => {
        this.throwErrorCustom('Error al crear orden');
        return throwError(e);
      })
    );
  }

  // Función para lanzar mensajes de error
  throwErrorCustom(mensaje: string){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: mensaje,
      showConfirmButton: false,
      timer: 3500
    });
  }

}
