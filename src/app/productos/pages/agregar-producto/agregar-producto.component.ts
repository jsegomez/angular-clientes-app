import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Producto } from '../../interfaces/producto.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styles: [
  ]
})
export class AgregarProductoComponent implements OnInit {

  constructor(
    private productoService: ProductoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {}

  public formProducto = this.formBuilder.group({
    nombre      : ['', [Validators.required, Validators.minLength(3)]],
    precio      : ['', [Validators.required, Validators.minLength(3)]],
    descripcion : ['', [Validators.required, Validators.minLength(10)]],
  });

  validarCampo(campo: string){
    return  this.formProducto.controls[campo].errors &&
            this.formProducto.controls[campo].touched;
  }

  crearProducto(){
    if(this.formProducto.invalid){
      this.formProducto.markAllAsTouched();
      return
    }

    const {nombre, precio, descripcion} = this.formProducto.value;
    const data: Producto = {nombre, precio, descripcion}

    this.productoService.registrarProducto(data).subscribe(
      response => {
        this.router.navigate([`/productos/detalle-producto/${response.id}`]);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'producto creado con éxito',
          showConfirmButton: false,
          timer: 3500
        })
      }
    )

  }
}
