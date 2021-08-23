import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './componets/main/main.component';
import { QuoteComponent } from './componets/quote/quote.component';
import { FormComponent } from './componets/form/form.component';
import { DatepipePipe } from './datepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    QuoteComponent,
    FormComponent,
    DatepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
