import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_BASE = 'https://rickandmortyapi.com/api/character/';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }
  
  getCharacter(n: number) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${n}`);
  }

  get() {
    return this.http.get(URL_BASE);
  }
}
