import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styles: [
  ]
})
export class ListadoClientesComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getClientes()
  }

  clientes: Cliente[] = [];

  getClientes(){
    this.clienteService.getClientes().subscribe(
      response => this.clientes = response
    );
  }

  detalleCliente(idCliente: string | undefined){
    this.router.navigate([`/clientes/detalle-cliente/${idCliente}`]);
  }

}
