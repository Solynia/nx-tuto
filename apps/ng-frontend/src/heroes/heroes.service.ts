import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Hero } from '@nx-tuto/interfaces';

@Injectable()
export class HeroesService {
  private readonly url = 'http://localhost:3000/api/heroes';
  private readonly http = inject(HttpClient)

  findAll() {
    return this.http.get<Hero[]>(this.url)
  }
}
