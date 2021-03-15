import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompleteCalculatorComponent } from './complete-calculator/complete-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CompleteCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
