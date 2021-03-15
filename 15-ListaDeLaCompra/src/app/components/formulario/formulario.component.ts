import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

import { Producto } from 'src/app/models/producto.models';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Output() productoCreado: EventEmitter<Producto>;

  nuevoProducto: Producto;

  constructor() { 
    this.nuevoProducto = new Producto();
    this.productoCreado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  envioFormulario(){
    this.productoCreado.emit(this.nuevoProducto);
    this.nuevoProducto = new Producto();
  }

}
