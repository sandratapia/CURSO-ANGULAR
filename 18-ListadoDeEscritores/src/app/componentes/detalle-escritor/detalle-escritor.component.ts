import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from 'src/app/escritores.service';
import { Escritor } from 'src/app/models/escritor.model';

@Component({
  selector: 'detalle-escritor',
  templateUrl: './detalle-escritor.component.html',
  styleUrls: ['./detalle-escritor.component.scss']
})
export class DetalleEscritorComponent implements OnInit {

  escritor: Escritor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private escritoresService: EscritoresService
    ) {}

  async ngOnInit(){
    this.activatedRoute.params.subscribe(async params => {
      this.escritor = await this.escritoresService.getById(parseInt(params.escritorId));
    })
  }

}
