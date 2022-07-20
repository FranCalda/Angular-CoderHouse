import { Component, OnDestroy } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { RickAndMortyService } from './rick-and-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'ProgramacionReactiva-Caldaroni';

  character$: Subscription;
  character: any;
  characterO$: Observable<any>;

  constructor(private rickAndMortyService: RickAndMortyService) {
    this.characterO$ = this.rickAndMortyService.getCharacter(2)
      .pipe(
        map((x: any) => {
          return {name: x.name, image: x.image}
        })
      );
    this.character$ = this.rickAndMortyService.getCharacter(1)
      .pipe(
        map((x: any) => {
          return {name: x.name, image:x.image}
        })
      ).subscribe(
      (character: any) => {
        this.character = character;
      }
    );
  }
  ngOnDestroy(): void {
    this.character$.unsubscribe();
  }

}
