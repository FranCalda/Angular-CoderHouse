import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/modelos/personajes';
import { AuthServices } from 'src/app/services/auth.services';
import { MockapiService } from 'src/app/services/mockapi.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  public personajes: Personaje[] | undefined ;

  constructor(
    private mockapiService: MockapiService,
    private authService: AuthServices,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.mockapiService.getPersonajes().subscribe(personajes => {
      this.personajes = personajes;
    });
  }

  onClick() {
    this.authService.logOut()
      .then(() => {
        this.router.navigate(['/login'])
      })
      .catch(error =>
        console.log(error)
      )
  }


}
