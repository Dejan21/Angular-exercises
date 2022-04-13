import { Injectable } from '@angular/core';
import { Card } from './card.module';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  
 
  

  cards= [
    {
      name: 'cheesburger',
      num: 1,
      content: 'hello first card'
    },
    {
      name: 'hamburger',
      num: 2,
      content: 'hello second card'
    },
    {
      name: 'third card',
      num: 3,
      content: 'hello third card'
    },
  ]

  recepilist: Card[] = [
    new Card('new recipe'),
    new Card('kecap, pomfrit')
   ];
  


  constructor() { }

  addCard(card: Card) {
    this.recepilist.push(card)
  }
}
