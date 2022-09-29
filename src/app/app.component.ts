import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Avengers';
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  faMoon = faMoon;
  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }
}
