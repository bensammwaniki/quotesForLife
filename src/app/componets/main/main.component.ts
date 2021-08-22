import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  quoter = new Quote(0,"","","","",new Date(),0,0);
  @Output() add = new EventEmitter<quote>();

  addQuote(){
this.add.emit(this.quoter);
this.quoter = new Quote(0,"","","","",new Date(),0,0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
