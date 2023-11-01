import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Tour of Heroes'
    );
  });

  it(`should have as title 'ng-frontend'`, () => {
    expect(component.title).toEqual('Tour of Heroes');
  });

  it('should render heroes', () => {
    const { debugElement } = fixture;
    expect(debugElement.query(By.css('nx-tuto-heroes'))).toBeTruthy();
  });
});
