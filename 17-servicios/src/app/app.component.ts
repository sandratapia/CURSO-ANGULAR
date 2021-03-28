import { Component } from '@angular/core';
import { Persona } from './models/persona.model';
import { PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PersonasService]
})
export class AppComponent {

  arrPersonas: Persona[];
  constructor(private personasService: PersonasService){}

  ngOnInit(){
    this.arrPersonas = this.personasService.getAllPersonas();
  }

  addPersona(){
    this.personasService.create(new Persona('Sandra', 'Tapia', 27, true));
  }

  async personasActivas(){
    // this.personasService.activos()
    //   .then(arrTempPersonas => console.log(arrTempPersonas))
    //   .catch(error => console.log(error));

    try {
      this.arrPersonas = await this.personasService.activosV2();
    }catch(error){
      console.log(error);
    }
  }
}
