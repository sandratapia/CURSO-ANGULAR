import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEscritoresComponent } from './componentes/lista-escritores/lista-escritores.component';
import { DetalleEscritorComponent } from './componentes/detalle-escritor/detalle-escritor.component';
import { ListaLibrosComponent } from './componentes/lista-libros/lista-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEscritoresComponent,
    DetalleEscritorComponent,
    ListaLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
