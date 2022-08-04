import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personaje } from '../modelos/personajes';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPersonajes(): Observable<Personaje[]> {
    return this.httpClient.get(
      environment.baseURL + '/personajes'
    ).pipe(map(response => response as Personaje[]));
  }
}
