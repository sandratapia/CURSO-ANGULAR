import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './complete-calculator.component.html',
  styleUrls: ['./complete-calculator.component.scss']
})
export class CompleteCalculatorComponent implements OnInit {
  concatResultado: string;
  calcFinish: boolean;

  constructor() { 
    this.concatResultado = "";
    this.calcFinish = false;
  }

  ngOnInit(): void {
  }

  onClickNumber($event: any){
    if(this.calcFinish){
      this.concatResultado = $event.target.innerText;
      this.calcFinish = false;
    }else{
      this.concatResultado += $event.target.innerText
    }
  }
  onResultado(){
    this.concatResultado = eval(this.concatResultado);
    this.calcFinish = true
  }

}
