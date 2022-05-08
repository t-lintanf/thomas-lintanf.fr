import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thomas-lintanf.fr';
  isNavOpen = false;

  onClickMenu(): void {
    this.isNavOpen = !this.isNavOpen;
    console.debug('Click menu, isNavOpen', this.isNavOpen);
  }
}
