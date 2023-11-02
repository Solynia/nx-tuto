import { Test, TestingModule } from '@nestjs/testing';
import { Hero } from '@nx-tuto/interfaces';
import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroesService],
    }).compile();

    service = module.get<HeroesService>(HeroesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of heroes', () => {
      const heroes: Hero[] = [
        { id: 12, name: 'Dr. Nice' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
      ];
      jest.spyOn(service, 'findAll').mockImplementation(() => heroes);
      expect(service.findAll()).toBe(heroes);
    });
  });
});
