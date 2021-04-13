import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';

import Swal from 'sweetalert2';

import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  private _urlBase: string = `${environment.urlBase}/clientes`;

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this._urlBase).pipe(
      catchError( e => {
        this.throwErrorCustom('Error al cargar clientes');
        return throwError(e);
      })
    );
  }

  getDetalleCliente(id: string):Observable<Cliente>{
    return this.http.get<Cliente>(`${this._urlBase}/${id}`).pipe(
      catchError( e => {
        this.throwErrorCustom('Error al cargar cliente');
        return throwError(e);
      })
    );
  }

  registrarCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this._urlBase, cliente).pipe(
      catchError( e => {
        this.throwErrorCustom('Error al registrar cliente');
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
