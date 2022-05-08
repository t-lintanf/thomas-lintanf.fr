import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'thomas-lintanf.fr';

  ngOnInit(): void {
    console.debug('test');
  }
}
