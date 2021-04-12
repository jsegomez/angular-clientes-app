import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styles: [
  ]
})
export class DetalleClienteComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDetalleCliente();
  }

  cliente!: Cliente;

  getDetalleCliente(){
    this.activatedRoute.params
    .pipe(switchMap( ({ id }) => this.clienteService.getDetalleCliente(id)))
    .subscribe( response => this.cliente = response);
  }

  regresar(){
    this.router.navigate(['/clientes/listado-clientes']);
  }
}
