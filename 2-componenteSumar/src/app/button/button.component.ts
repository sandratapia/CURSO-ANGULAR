import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buttonRs',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  
  mensajeButton: string;

  constructor() { 
    this.mensajeButton = "Resultado";
  }
  ngOnInit(): void {
  }

}
