import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  standalone: true,
  imports: [HeroesComponent, RouterModule],
  selector: 'nx-tuto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
