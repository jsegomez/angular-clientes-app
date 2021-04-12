import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';

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
  ) { }

  ngOnInit(): void {
  }

  public formCliente = this.formBuilder.group({
    nombre    : ['', [Validators.required, Validators.minLength(3)]],
    apellido  : ['', [Validators.required, Validators.minLength(3)]]
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
  }

}
