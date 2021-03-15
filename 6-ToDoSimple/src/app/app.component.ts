import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  arrayTareas: Tarea[];

  constructor(){
    this.arrayTareas = [];
  }

  onTareaCreada($event){
    this.arrayTareas.push($event);
  }

  borrarTarea(tarea:Tarea){
    this.arrayTareas.splice(this.arrayTareas.indexOf(tarea), 1);
  }
}
