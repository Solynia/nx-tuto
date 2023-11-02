import { Injectable } from '@nestjs/common';
import { Hero } from '@nx-tuto/interfaces';

@Injectable()
export class HeroesService {
  private readonly heroes: Hero[] = [];

  findAll() {
    return this.heroes;
  }
}
