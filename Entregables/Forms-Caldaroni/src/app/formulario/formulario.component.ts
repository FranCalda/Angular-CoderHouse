import { Component, OnInit,} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  namePattern = "[a-zA-Z ]{2,254}";

  formulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(this.namePattern)]],
    apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(this.namePattern)]],
    edad: ['', [Validators.required, Validators.min(18), Validators.max(110)]],
    calle: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(this.namePattern)]],
    ciudad: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(this.namePattern)]],
    estado: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(this.namePattern)]],
    codigoPostal: ['', [Validators.required,Validators.max(999999)]]
  })

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.formulario.value);
  }

}
