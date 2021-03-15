import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  personas: any[];

  constructor() {
    this.personas = [
      {
        nombre: 'Janice',
        apellidos: 'Najera Pabón',
        calle: "Ctra. de Siles, 16",
        telefono: '741 385 960'
      },
      {
        nombre: 'Eliazar',
        apellidos: 'Estévez Carmona',
        calle: "Avda. Rio Nalon, 7",
        telefono: '634 933 009'
      },
      {
        nombre: 'Apolo',
        apellidos: 'Loyra Sierra',
        calle: "Plazuela do Porto, 90",
        telefono: '783 326 373'
      },
      {
        nombre: 'Ascla',
        apellidos: 'Hernández Yáñez',
        calle: "Salzillo, 60",
        telefono: '684 653 485'
      },
      {
        nombre: 'Benet',
        apellidos: 'Betancourt Godoy',
        calle: "Cañadilla, 47",
        telefono: '785 664 317'
      },
      {
        nombre: 'Winifreda',
        apellidos: 'Cedillo Leyva',
        calle: "Rúa do Paseo, 99",
        telefono: '693 673 215'
      },
      {
        nombre: 'Popea',
        apellidos: 'Lebrón Rangel',
        calle: "Reiseñor, 38",
        telefono: '754 637 272'
      },
    ]
   }

  ngOnInit(): void {
  }

  // addPerson(){
  //   this.personas.push();
  // }

}
