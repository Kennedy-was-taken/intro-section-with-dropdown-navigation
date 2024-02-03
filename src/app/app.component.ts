import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'intro-section-with-dropdown-navigation';

  life : Boolean = false

  showMe() : void{
    this.life = !this.life;
  }

  clickedOutside(): void {
    this.life = false;
  }
}
