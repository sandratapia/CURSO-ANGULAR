import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //LOS PIPES SON HERRAMIENTAS PARA PODER TRANSFORMAR NUESTROS DATOS EN EL MOMENTO DE MOSTRARLOS DENTRO DE NUESTRA PLANTILLA

  //CURRENCY PIPE
  precio: number;

  //DECIMAL PIPE
  numero: number

  //DATE PIPE
  fechaActual: Date;

  //PERCENT PIPE
  numAleatorio: number;

  //JSON PIPE
  estudiante: any;

  //LOWER, UPPER, TITLE CASE PIPE
  texto: string;

  //SLICE PIPE
  animales: string[];
  minimo: number;
  maximo:number;

  //ASYNC PIPE
  prom: Promise<string>;

  

  constructor(){
    this.precio = 198.87;
    this.numero = 3.88118129;
    this.fechaActual = new Date();
    this.numAleatorio = Math.random();
    this.estudiante = {
      nombre: 'Roberto',
      apellidos: 'López',
      notas: [3, 4, 7, 10]
    }
    this.texto = 'En un lugar de la Mancha';
    this.animales = ['perro', 'gato', 'pájaro', 'tortuga'];
    this.minimo = 0;
    this.maximo = this.animales.length;
    this.prom = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Se resuelve la promesa pasados 4 segundos'), 4000)
    });
  }

  ngOnInit(){
    setInterval(() => this.fechaActual = new Date(), 1000);
  }
}
