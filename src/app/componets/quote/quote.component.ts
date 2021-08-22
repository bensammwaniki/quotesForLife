
import { Input } from '@angular/core';
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
  newAddQuote(quoteAdd: Quote){
    let arraysize = this.quote.length;
    quoteAdd.id = arraysize+1;
    quoteAdd.datePosted = new Date(quoteAdd.completeDate)
    this.quote.push(quoteAdd)
  }

  @Input()
  qLife!: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    console.log(this.qLife);
    
    this.qLife.likes+=1;
  }
  downvote(){
    this.qLife.dislikes+=1;
  }
  
  // add a quote on submit

  quoteDelete(read: any, index: number){
    if (read) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quote.splice(index,1);
      }
      
    }
  }
 
  
  constructor() { }

  ngOnInit() {
  }

}