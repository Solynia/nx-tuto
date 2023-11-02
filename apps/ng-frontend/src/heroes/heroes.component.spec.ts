import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesComponent],
    }).compileComponents();

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

  it('should render default hero', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(
      'Windstorm'
    );
  });
});
