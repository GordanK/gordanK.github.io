import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Hero[] = [];

  constructor() { }

  add(hero:Hero){
    this.cart.push(hero);
  }
}
