import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  titulo: string = "Lista Alumnos - Logica I";

  estado: string = "";

  alumnos = [
    { nombre: "Juan Lopez", promedio: 8, estado:"Aprobado"} ,
    { nombre: "Andres Pol", promedio: 9, estado: "Aprobado" } ,
    { nombre: "Franco Cal", promedio: 5, estado: "Desaprobado" } ,
    { nombre: "Lucas Der", promedio: 6, estado: "Aprobado" } ,
    { nombre: "Nicolas Mor", promedio: 3, estado: "Desaprobado" } ,
    { nombre: "Andrea Sun", promedio: 1, estado: "Desaprobado" } ,
    { nombre: "German Far", promedio: 7, estado: "Aprobado" } ,
    { nombre: "Lucia Are", promedio: 4, estado: "Desaprobado" } ,
    { nombre: "Victoria Sen", promedio: 10, estado: "Aprobado" }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
}

  


