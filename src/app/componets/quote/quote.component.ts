
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // sample data to begin with
  quote:Quote[] = [
    new Quote (1,'Bensam','Human spirit','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', new Date(2021,9,12),0,0),
    new Quote (2,'Mwaniki','Technology…','The way to get started is to quit talking and begin doing.','Walt Disney',new Date(2021,8,15),0,0),
    new Quote (3,'Njoroge','The great myth',"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",'steve jobs',new Date(2009,8,3),0,0),
    new Quote (4,'Joseph','Communication','If life were predictable it would cease to be life, and be without flavor.','Elenor Roosevelt',new Date(2020,12,3),0,0),
    new Quote (5,'Bensam','Human spirit','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela', new Date(2021,9,12),0,0),

  ];
    get quotesorted() {
    return this.quote.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  } 
 // adds quotes in an Array 
quoteAdded = new Quote(0,"","","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quote>();
  addQuote(){
this.add.emit(this.quoteAdded);
this.quoteAdded = new Quote(0,"","","","",new Date(),0,0);
  }
  constructor() { }

  ngOnInit() {
  }

}