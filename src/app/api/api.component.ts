import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor( private http: HttpClient) { }
  posts:any = []

  ngOnInit(): void {
  }

  loadPosts(){
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((posts) => {
      this.posts= posts;
      
    });
  }

}
