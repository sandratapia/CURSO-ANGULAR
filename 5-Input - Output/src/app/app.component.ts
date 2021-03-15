import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Input';

  titulos: string[];

  campoTexto: string;

  persona: any;

  constructor(){
    this.titulos = ['Jurassic Park', 'Star Wars', 'Jumanji'];
    this.campoTexto ="Valor inicial";
    this.persona = {};
  }

  onAlertaPulsada($event){
    console.log($event);
  }

  onClickVariable(){
    this.campoTexto = "Valor desde el botón";
  }
}
