import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  cards= [
    {
      name: 'first card',
      num: 1,
      content: 'hello first card'
    },
    {
      name: 'second card',
      num: 2,
      content: 'hello second card'
    },
    {
      name: 'third card',
      num: 3,
      content: 'hello third card'
    },
  ]

  constructor() { }
}
