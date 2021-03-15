import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() tareas: Tarea[];
  @Output() borrarTarea: EventEmitter<Tarea>;

  constructor() {
    this.borrarTarea = new EventEmitter();
   }

  ngOnInit(): void {
  }

  deleteTask(tarea:Tarea){
    this.borrarTarea.emit(tarea);
    
  }

  tareaCompletada(_tarea:Tarea){
    _tarea.completa = !_tarea.completa;
  }

}
