import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mostrar: boolean;

  constructor(){
    this.mostrar = true;
  }

  onClickMostrar(){
    this.mostrar = !this.mostrar;
  }
}
