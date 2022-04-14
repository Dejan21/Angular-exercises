import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AppService } from '../shared/app.service';




@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {

  @ViewChild("title")title: any 
  @ViewChild("content")content: any 
  card: any;


  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  this.card = this.appService.cards.find((card:any) => {
    return card.num === productIdFromRoute 
  });
  }

  edit() {
    console.log(this.title.nativeElement.value, this.content.nativeElement.value)
 
    this.card.name = this.title.nativeElement.value
    console.log(this.card);
    
  }

}
