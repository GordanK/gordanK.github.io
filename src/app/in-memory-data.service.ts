import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'phd. Strange', description: 'loop on my hands' },
      { id: 13, name: 'Love Maker', description: 'u cannot see me ' },
      { id: 14, name: 'Lifepool', description: 'spider men is my friends' },
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
