import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})


@Input("card_title")
export class RecipeListComponent implements OnInit {

  cards: any;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.cards = this.appService.cards
  }

}
