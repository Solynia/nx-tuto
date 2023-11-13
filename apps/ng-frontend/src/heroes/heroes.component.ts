import { UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '@nx-tuto/interfaces';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'nx-tuto-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule],
  providers: [HeroesService],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  private readonly heroesService = inject(HeroesService)

  heroes$ = this.heroesService.findAll();
  hero: Hero = { id: 1, name: 'Windstorm' };
}
