import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroesService {
  findAll() {
    return `This action returns all heroes`;
  }
}
