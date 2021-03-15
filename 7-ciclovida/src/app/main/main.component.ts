import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() texto: string; 
  

  //EL CONSTRUCTOR ES EL PRIMER METODO QUE SE EJECUTA Y SE USA PARA INICIALIZAR PROPIEDADES
  constructor() {
    console.log(`TEXTO: ${this.texto}`);
    //ESTO NOS DA UNDEFINED PORQUE LOS INPUT NO ESTÁN DISPONIBLES EN EL CONSTRUCTOR
   }

   //ENTRE ESTOS DOS METODOS SE EJECUTA AUTOMATICAMENTE EL ngOnChanges(){}
   ngOnChanges(changes: SimpleChange){
    console.log(changes);
    //NOS DA LA INFORMACIÓN DE LOS CAMBIOS
   }

  //ES EL METODO QUE SE EJECUTA CUANDO ESTA ARRANCANDO EL COMPONENTE
  ngOnInit(): void {
    //POR EJEMPLO ANIMACIONES
    console.log(`TEXTO: ${this.texto}`);
    //AQUI YA SI FUNCIONA
  }

  ngAfterViewInit(){
    //CUANDO YA HA ARRANCADO EL HTML, Y PUEDO HACER ACCIONES SOBRE EL
  }

  ngOnDestroy(){
    //ELIMINAR COSAS QUE YA NO QUEREMOS
  }



}
