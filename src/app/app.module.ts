import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './componets/main/main.component';
import { QuoteComponent } from './componets/quote/quote.component';
import { FormComponent } from './componets/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    QuoteComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
