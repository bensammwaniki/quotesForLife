import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/quote'; 

@Component({
  selector: 'app-main',
  templateUrl:'./main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   newQuote = new Quote(0,"","","","",new Date(),0,0);
   @Output() add = new EventEmitter<Quote>();
   
newAddQuote(){
this.add.emit(this.newQuote);
this.newQuote = new Quote(0,"","","","",new Date(),0,0);

  }
  
 constructor() { }

  ngOnInit() {
  }

}