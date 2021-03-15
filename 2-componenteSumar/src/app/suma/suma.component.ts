import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.scss']
})
export class SumaComponent implements OnInit {
  numero1: number;
  numero2: number;
  @Output()
  emisor1: EventEmitter<number>;
  @Output()
  emisor2: EventEmitter<number>;

  constructor() { 
    this.numero1 = 23;
    this.numero2 = 48;
    this.emisor1 = new EventEmitter<number>();
    this.emisor2 = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.emisor1.emit(this.numero1);
    this.emisor2.emit(this.numero2);
  }

}
