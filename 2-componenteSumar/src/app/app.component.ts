import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componenteSumar';
  numero1: number = 0;
  numero2: number = 0;
  sumaResultado: number = 0;

  recibeNumeros (numero: number, index: number) {
    if(index == 1) {
      this.numero1 = numero;
    } else{
      this.numero2 = numero;
    }
  }

  sumameNumeros (){
    this.sumaResultado = this.numero1 + this.numero2;
  }

  resultadoClick (){
    this.sumameNumeros();
  }
}
