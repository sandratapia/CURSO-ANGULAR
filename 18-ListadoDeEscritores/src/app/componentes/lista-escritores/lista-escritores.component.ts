import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { EscritoresService } from 'src/app/escritores.service';
import { Escritor } from 'src/app/models/escritor.model';

@Component({
  selector: 'lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.scss']
})
export class ListaEscritoresComponent implements OnInit {

  arrEscritores: Escritor[];

  constructor(private escritoresService: EscritoresService) { }

  async ngOnInit() {
    //FORMA NORMAL
    // this.arrEscritores = this.escritoresService.getAll();

    //PROMESA THEN CATCH
    // this.escritoresService.getAllPromise()
    //   .then(escritores => {
    //     this.arrEscritores = escritores;
    // });

    //PROMESA ASYNC AWAIT
    this.arrEscritores = await this.escritoresService.getAllPromise();
  }

  async seleccionPais($event){
    if($event.target.value ==='todos'){
      this.arrEscritores = await this.escritoresService.getAllPromise();
    }else{
      this.arrEscritores = await this.escritoresService.getByCountry($event.target.value);
    }
  }

}
