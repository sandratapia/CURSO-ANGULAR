///<reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mapa-nativo',
  templateUrl: './mapa-nativo.component.html',
  styleUrls: ['./mapa-nativo.component.scss']
})
export class MapaNativoComponent implements OnInit {

  @ViewChild('divMap') divMap:ElementRef;

  mapa: google.maps.Map;

  constructor() { }

  ngOnInit(){}
  ngAfterViewInit(): void {
    this.cargarMapa();
  }

  cargarMapa(){
    const opciones = {
      center: new google.maps.LatLng(0,0),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }

    this.mapa = new google.maps.Map(this.divMap.nativeElement, opciones);
  }

}
