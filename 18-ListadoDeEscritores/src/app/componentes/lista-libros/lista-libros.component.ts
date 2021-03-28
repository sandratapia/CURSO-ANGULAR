import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from 'src/app/libros.service';
import { Libro } from 'src/app/models/libro.model';

@Component({
  selector: 'lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.scss']
})
export class ListaLibrosComponent implements OnInit {

  libros: Libro[];
  
  constructor(
    private LibrosService: LibrosService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit():void {
    this.activatedRoute.parent.params.subscribe(async params => {
      this.libros = await this.LibrosService.getByWriter(parseInt(params.escritorId));
    });
  }

}
