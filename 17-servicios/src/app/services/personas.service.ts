import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';

@Injectable()

export class PersonasService {
  
  personas: Persona[];
  constructor() {
    this.personas = [
      new Persona('Mario', 'Rodriguez', 32, true),
      new Persona('Rocio', 'García', 15, false),
      new Persona('Laura', 'Robles', 28, true),
      new Persona('Lorenzo', 'Romero', 65, true),
    ];
  }

  getAllPersonas(){
    return this.personas;
  }

  create(personaNueva: Persona){
    this.personas.push(personaNueva);
  }

  activos(): Promise <Persona[]>{
    const prom = new Promise<Persona[]>((resolve, reject) =>{
      const arrTemp: Persona[] = [];
      for(let persona of this.personas){
        arrTemp.push(persona);
      }
      resolve(arrTemp);
    })
    return prom;
  }

  activosV2(): Promise<Persona[]> {
    return new Promise((resolve, reject) => {
      resolve(this.personas.filter(persona => persona.activo));
    });
  }
}
