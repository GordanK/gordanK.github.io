import { Component, OnDestroy, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  heroes: Hero[] = [];
  isShowing: boolean = true;


  constructor(private heroService: HeroService) {
    console.log({constructor : "constructor"}); //first
   }

  ngOnInit(): void {
    console.log({OnInit : "on init"}); //later
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  // addToCart(){
  //   console.log(this.heroes)
  //   this.addToCart.add();
  //   this.heroEmitter.emit(this.hero);
  // }
}
