import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.scss']
})
export class SemaforoComponent implements OnInit {

  cadenaClases: string;
  arrayClases: string[];

  colorSeleccionado: string;

  constructor() { 
    this.cadenaClases = 'rojo';
    this.arrayClases = ['semaforo'];
    this.arrayClases.push('rojo');
    this.arrayClases.push('redondo');

    this.colorSeleccionado = 'r';
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.colorSeleccionado === 'r'){
        this.colorSeleccionado = 'a';
      }else if (this.colorSeleccionado === 'a'){
        this.colorSeleccionado = 'v';
      }else if (this.colorSeleccionado === 'v'){
        this.colorSeleccionado = 'r';
      }
    }, 1000);
  }

}
