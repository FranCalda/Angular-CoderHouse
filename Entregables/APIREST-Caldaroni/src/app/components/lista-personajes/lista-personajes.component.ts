import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/modelos/personajes';
import { MockapiService } from 'src/app/services/mockapi.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  public personajes: Personaje[] | undefined ;

  constructor(
    private mockapiService: MockapiService
  ) { }

  ngOnInit(): void {
    this.mockapiService.getPersonajes().subscribe(personajes => {
      this.personajes = personajes;
    });
  }


}
