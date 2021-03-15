import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() inicio: number;

  @Output() terminaCronometro: EventEmitter<string>;
  
  counter: number;

  constructor() { 
    this.counter = 10;
    this.terminaCronometro = new EventEmitter();
  }

  ngOnInit(): void {
    this.counter = this.inicio ? this.inicio : 10;
  }

  startInterval(){
    let interval = setInterval(() => {
      this.counter--;
      if(this.counter < 0){
        clearInterval(interval);
        this.counter = this.inicio;
        this.terminaCronometro.emit('Finaliza el cronometro con el numero' + this.inicio);
      }
    }, 1000);
  }
}
