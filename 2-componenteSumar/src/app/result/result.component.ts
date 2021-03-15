import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input()
  resultSuma: number;


  constructor() { 
    this.resultSuma = 0;
  }

  ngOnInit(): void {
  }

}
