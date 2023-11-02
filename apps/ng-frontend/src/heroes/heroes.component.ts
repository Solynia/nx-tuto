import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from '@nx-tuto/interfaces';

@Component({
  selector: 'nx-tuto-heroes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  hero: Hero = { id: 1, name: 'Windstorm' };
}
