import { Injectable } from '@angular/core';
import { Empleado } from './models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  arrEmpleados: Empleado[];

  constructor() {
    this.arrEmpleados = [];
  }

  getAll(): Promise<Empleado[]>{
    return new Promise ((resolve, reject) => {
      resolve(this.arrEmpleados);
    })
  }

  insert(_empleado): void {
    this.arrEmpleados.push(_empleado);
    console.log(this.arrEmpleados);
  }
}
