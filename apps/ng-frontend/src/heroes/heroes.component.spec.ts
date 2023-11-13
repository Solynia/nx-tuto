import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from '@nx-tuto/interfaces';
import { Observable, lastValueFrom, of } from 'rxjs';
import { HeroesComponent } from './heroes.component';
import { HeroesService } from './heroes.service';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  const defaultHeroes: Hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
  ]
  const service = {
    findAll: (): Observable<Hero[]> => of(defaultHeroes)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesComponent],
    }).overrideComponent(HeroesComponent, { set: { providers: [{ provide: HeroesService, useValue: service }] } })
      .compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as default hero Windstorm', () => {
    expect(component.hero.name).toEqual('Windstorm');
  });

  it('should have a list of heroes', async () => {
    await expect(lastValueFrom(component.heroes$)).resolves.toEqual(defaultHeroes);
  })

  it('should render default hero', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(
      'WINDSTORM Details'
    );
    expect(compiled.querySelectorAll('div')?.item(0).textContent).toContain(
      'id: 1'
    );
    expect(compiled.querySelector('label')?.textContent).toContain(
      'Hero name:'
    );
    expect(compiled.querySelector('input')?.value).toContain(
      'Windstorm'
    );
  });
});
