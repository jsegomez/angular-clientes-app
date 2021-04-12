import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';

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
    return this.http.get<Cliente[]>(this._urlBase);
  }

  getDetalleCliente(id: string):Observable<Cliente>{
    return this.http.get<Cliente>(`${this._urlBase}/${id}`);
  }

  registrarCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this._urlBase, cliente).pipe(
      catchError( e => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error al registrar cliente',          
          showConfirmButton: false,
          timer: 3500
        })

        return throwError(e);
      })
    );
  }
}
