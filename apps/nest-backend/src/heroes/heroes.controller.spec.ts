import { Test, TestingModule } from '@nestjs/testing';
import { Hero } from '@nx-tuto/interfaces';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';

describe('HeroesController', () => {
  let controller: HeroesController;
  let service: HeroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeroesController],
      providers: [HeroesService],
    }).compile();

    controller = module.get<HeroesController>(HeroesController);
    service = module.get<HeroesService>(HeroesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of heroes', () => {
      const heroes: Hero[] = [
        { id: 12, name: 'Dr. Nice' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
      ];
      jest.spyOn(service, 'findAll').mockImplementation(() => heroes);
      expect(controller.findAll()).toBe(heroes);
    });
  });
});
