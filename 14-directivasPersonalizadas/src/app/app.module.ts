import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubrayadoDirective } from './directivas/subrayado.directive';
import { PruebasComponent } from './components/pruebas/pruebas.component';

@NgModule({
  declarations: [
    AppComponent,
    SubrayadoDirective,
    PruebasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
