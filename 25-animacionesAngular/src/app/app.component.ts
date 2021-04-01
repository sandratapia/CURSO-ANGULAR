import { state, style, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('cambiaColor', [
      state('rojo', style({
        'background-color': 'red'
      })),
      state('amarillo', style({
        'background-color': 'yellow'
      })),
      state('verde', style({
        'background-color': 'green'
      }))
    ])
  ]
})
export class AppComponent {
  color: string;

  constructor(){
    this.color = 'verde';
  }

  ngOnInit(){
    setInterval(() => {
      if(this.color === 'rojo'){
        this.color = 'amarillo';
      }else if (this.color === 'amarillo') {
        this.color = 'verde';
      }else if (this.color === 'verde'){
        this.color = 'rojo';
      }
    }, 2000);
  }
}
