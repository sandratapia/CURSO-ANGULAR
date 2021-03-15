import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto.models';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

  @Input() productos: Producto[];

  @Input() textoBoton: string;

  @Input() tituloProductos: string;

  @Output() productoSeleccionado: EventEmitter<number>;

  constructor() { 
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onComprar(indice){
    this.productoSeleccionado.emit(indice);
  }

}
