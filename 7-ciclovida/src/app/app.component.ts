import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mainTexto: string;

  constructor() {
    this.mainTexto = "Texto desde el padre"
  }

  ngOnInit(){
    let cont = 0;
    setInterval(() => {
      this.mainTexto = `Texto ${cont++}`;
    }, 2000);
  }
}
