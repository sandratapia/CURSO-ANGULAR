import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/empleados.service';
import { Empleado } from 'src/app/models/empleado.model';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];

  constructor(
    private empleadosService: EmpleadosService
  ) { }

  ngOnInit(): void {
    this.empleadosService.getAll()
      .then(arrEmpleados => {
        this.empleados = arrEmpleados;
      })
  }

}
