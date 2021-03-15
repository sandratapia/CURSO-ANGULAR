import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {

  opcionNumero: number;
  opcionString: string;

  constructor() {
    this.opcionNumero = 2;
    this.opcionString = 'uno';
   }

  ngOnInit(): void {
  }

}
