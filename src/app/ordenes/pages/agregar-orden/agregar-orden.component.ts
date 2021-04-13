import { Component } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-orden',
  templateUrl: './agregar-orden.component.html',
  styles: [
  ]
})
export class AgregarOrdenComponent {

  constructor(
    private formBuilder: FormBuilder,
    private ordenesService: OrdenesService
  ) { }

  public formOrdenes = this.formBuilder.group({
    idCliente : ['', Validators.required],    
    fecha     : ['', Validators.required],
    producto  : this.formBuilder.array([], Validators.required),    
  })  

  get productosArr(){
    return this.formOrdenes.get('producto') as FormArray;
  }
  
  addProducto: FormControl = this.formBuilder.control('', Validators.required);

  agregarProducto(){
    if(this.addProducto.invalid){
      return;
    }

    this.productosArr.push( new FormControl(this.addProducto.value, Validators.required));
    this.addProducto.reset();
  }

  borrarProducto(indice: number){
    this.productosArr.removeAt(indice);
  }

  validarCampo(campo: string){
    return  this.formOrdenes.controls[campo].errors &&
            this.formOrdenes.controls[campo].touched;
  }

  guardar(){
    if(this.formOrdenes.invalid){
      this.formOrdenes.markAllAsTouched();      
      return;
    }

    console.log(this.formOrdenes.value);

  }

}
