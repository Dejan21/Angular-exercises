import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../shared/app.service';
import { Card } from '../shared/card.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})


@Input("card_title")


export class RecipeListComponent implements OnInit {

  cards: any;
  id: any | undefined;
  isAuth=false;


  constructor(private appService: AppService) { 
    setInterval(()=>{
      this.isAuth=true;
    },4000)
  }

  ngOnInit(): void {
    this.cards = this.appService.cards

  
  }
  

  onFormSubmit(form: NgForm){
    console.log('Form Submited');
    console.log(form);

    this.appService.addCard(new Card( form.value.card))

  }

    

   goToPage(api:any): void{
      
   }

   editrecipe(editpage: string ,id:number, cards:any): void {
  }
  
  
}


