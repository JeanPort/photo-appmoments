import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  public element: any;

  constructor(@Inject(DOCUMENT) private document: any){
    this.element = document;
  }
  ngOnInit(): void {

  }
}
