import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  mensaje: string;
  constructor() { 
    this.mensaje = "este es el mensaje inicial";
  }

  ngOnInit(): void {
  }

  pulsaClick($event){
    console.log("Se ha pulsado el botón");
    console.log($event);
  }

  selectOption($event){
    console.log($event.target.value);
  }

  onMouseEnter(){
    this.mensaje = "Estoy dentro del div";
  }
  
  onMouseOut(){
    this.mensaje = "Estoy fuera del div";
  }

  onChangeInput($event){
    console.log($event.target.value);
  }

  onInput($event){
    console.log($event.target.value);
    this.mensaje = $event.target.value;
  }

  onFocus(){
    console.log("Recibe el foco");
  }

  onBlur(){
    console.log("Pierde el foco")
  }
}
