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
      content: 'Cheese , kecap, meat',
      
    },
    {
      name: 'hamburger',
      num: 2,
      content: 'Meat, mayonnaise'
    },
    {
      name: 'BigMac',
      num: 3,
      content: 'Double meat'
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
