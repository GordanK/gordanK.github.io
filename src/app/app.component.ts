import { Component } from '@angular/core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Avengers';
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  // faCoffee = faCoffee;
}
