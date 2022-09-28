import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'phd. Strange', description: 'loop on my hands',image:'https://upload.wikimedia.org/wikipedia/zh/8/8d/Doctor_Strange_2016_Poster.jpg' },
      { id: 13, name: 'Love Maker', description: 'u cannot see me ',image:'https://assets.juksy.com/files/articles/53296/800x_100_w-61c390bbcbe89.jpg' },
      { id: 14, name: 'Lifepool', description: 'spider men is my friends',image:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e38bab81-857f-45bd-9de6-bce005d06ca1/da4qj5o-94c7f907-f9d6-4859-b5a6-d94e3c321870.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UzOGJhYjgxLTg1N2YtNDViZC05ZGU2LWJjZTAwNWQwNmNhMVwvZGE0cWo1by05NGM3ZjkwNy1mOWQ2LTQ4NTktYjVhNi1kOTRlM2MzMjE4NzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6P_rdDQhDsTaC_jWs6HNcrB_KTeHBlGn6AwU3teWdYg' },
      { id: 15, name: 'white panther', description: 'rip' },
      { id: 16, name: 'Dr.door', description: 'doom is coming' },
      { id: 17, name: 'Wonder man', description: 'i got chain in my hands' },
      { id: 18, name: 'professor z', description: 'wheel-chairmen' },
      { id: 19, name: 'heHulk', description: 'Megan' },
      { id: 20, name: 'Captain usa', description: 'egg plant' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
