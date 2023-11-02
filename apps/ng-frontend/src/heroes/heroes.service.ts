import { Injectable } from '@angular/core';
import { Hero } from '@nx-tuto/interfaces';
import { of } from 'rxjs';

@Injectable()
export class HeroesService {
  findAll() {
    return of<Hero[]>([]);
  }
}
