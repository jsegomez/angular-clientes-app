import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
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
    return this.http.post<Cliente>(this._urlBase, cliente);
  }
}
