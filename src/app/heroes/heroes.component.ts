import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',

  //Remove standalone, imports, and change styleUrl to styleUrls: The @Component decorator doesn't recognize standalone and imports.
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero = 'Windstorm'
}
