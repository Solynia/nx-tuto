import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Hero } from '@nx-tuto/interfaces';
import { lastValueFrom, of } from 'rxjs';
import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroesService]
    });
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('findAll', () => {
    it('should return an array of heroes', async () => {
      const heroes: Hero[] = [
        { id: 12, name: 'Dr. Nice' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
      ];
      jest.spyOn(service, 'findAll').mockImplementation(() => of(heroes));
      await expect(lastValueFrom(service.findAll())).resolves.toBe(heroes);
    });
  });
});
