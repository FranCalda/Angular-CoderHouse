import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; '@angular/material/dialog'

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss']
})
export class CargaComponent implements OnInit {

  estadoList = ["Nuevo", "Usado", "Reacondicionado"]
  productoForm !: FormGroup;
  accionBtn : string = 'Guardar'
  constructor(private fb: FormBuilder, private api: ApiService,@Inject(MAT_DIALOG_DATA) public editData: any, private dialogRef: MatDialogRef<CargaComponent>) { }

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      estado: ['', Validators.required],
      precio: ['', Validators.required],
      comentario: ['', Validators.required],
      fecha:['',Validators.required]
    })

    if (this.editData) {
      this.accionBtn = 'Actualizar';
      this.productoForm.controls['nombre'].setValue(this.editData.nombre);
      this.productoForm.controls['categoria'].setValue(this.editData.categoria);
      this.productoForm.controls['estado'].setValue(this.editData.estado);
      this.productoForm.controls['precio'].setValue(this.editData.precio);
      this.productoForm.controls['comentario'].setValue(this.editData.comentario);
      this.productoForm.controls['fecha'].setValue(this.editData.fecha);
    }
  }


  agregarProducto() {
    if (!this.editData) {
      if (this.productoForm.valid) {
        this.api.postProducto(this.productoForm.value)
          .subscribe({
            next: (res) => {
              alert('Producto agregado exitosamente');
              this.productoForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              alert('Error al agregar el producto')
            }
          })
      };
    } else {
      this.actualizarProducto();
    }
  }

  actualizarProducto() {
    this.api.putProducto(this.productoForm.value, this.editData.id)
    .subscribe({
      next: (res) => {
        alert("Producto actualizado correctamente");
        this.productoForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert("Error al actualizar el producto");
      }
    })
  }

}
function subscribe(arg0: { next: (res: any) => void; }) {
  throw new Error('Function not implemented.');
}

