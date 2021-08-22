import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
    { 
      writer:'Alfred',
      title:'Quotes and life For', 
      quoteIt:'a list of all the ways technology has failed to improve the quality of life, please press three.',
      poster:'Kim Kahn', 
      date:Date(),
      like:0,
      dislike:0
    },
    { 
      writer:'Benna',
      title:'Tech and life For', 
      quoteIt:'a list of all the ways technology has failed to improve the quality of life, please press three.',
      poster:'Kim Kahn', 
      date:Date(),
      like:0,
      dislike:0
    },    { 
      writer:'Kimani',
      title:'Tech and life For', 
      quoteIt:'a list of all the ways technology has failed to improve the quality of life, please press three.',
      poster:'kim', 
      date:Date(),
      like:0,
      dislike:0
    },
    { 
      writer:'Kimani',
      title:'life For', 
      quoteIt:'a list of all the ways technology has failed to improve the quality of life, please press three.',
      poster:'kim', 
      date:Date(),
      like:0,
      dislike:0
    }
];

  constructor() { }

  ngOnInit(): void {
  }

}
