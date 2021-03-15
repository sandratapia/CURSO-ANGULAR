import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {

  @Input() mensaje: string;
  @Input() subtitulo: string;

  @Output() alertaPulsada: EventEmitter<string>;
  constructor() { 
    this.mensaje = "Mensaje por defecto";
    this.subtitulo = "Valor del subtitulo";

    this.alertaPulsada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(){
    this.alertaPulsada.emit('La alerta ha sido pulsada');
  }

}
