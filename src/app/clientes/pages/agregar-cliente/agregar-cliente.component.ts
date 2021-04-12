import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styles: [
  ]
})
export class AgregarClienteComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public formCliente = this.formBuilder.group({
    nombre     : ['', [Validators.required, Validators.minLength(3)]],
    apellidos  : ['', [Validators.required, Validators.minLength(3)]],
    telefono   : ['', [Validators.required, Validators.minLength(8)]],    
    nit        : ['', [Validators.required, Validators.minLength(14)]],
    correo     : ['', [Validators.required, Validators.email]],    
  });


  validarCampo(campo: string){
    return  this.formCliente.controls[campo].errors &&
            this.formCliente.controls[campo].touched;
  }

  crearCliente(){
    if(this.formCliente.invalid){
      this.formCliente.markAllAsTouched();
      return;
    }

    const {nombre, apellidos, correo, nit, telefono} = this.formCliente.value;
    const cliente: Cliente = {nombre, apellidos, correo, nit, telefono}

    this.clienteService.registrarCliente(cliente).subscribe(
      response => {
        this.router.navigate([`/clientes/detalle-cliente/${response.id}`]);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Cliente creado con éxito',
          text: `Registrado con Id: ${response.id}`,
          showConfirmButton: false,
          timer: 2500
        })
      }
    )
  }

  onlyNumber(event: any) {    
    const charCode = event.query ? event.query : event.keyCode;
    if ((charCode >= 48 && charCode <= 57)) {
      return true;
    }
    return false;
  }

}
