import { Controller, Get } from '@nestjs/common';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) { }

  @Get()
  findAll() {
    return this.heroesService.findAll();
  }
}
