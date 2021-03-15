import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Output() tareaCreada: EventEmitter<Tarea>

  nuevaTarea: Tarea;

  constructor() {
    this.nuevaTarea = new Tarea();
    this.tareaCreada = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onClickSubmit(){
    this.tareaCreada.emit(this.nuevaTarea);
    this.nuevaTarea = new Tarea();
  }

}
