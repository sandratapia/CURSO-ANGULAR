import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleEscritorComponent } from './componentes/detalle-escritor/detalle-escritor.component';
import { ListaEscritoresComponent } from './componentes/lista-escritores/lista-escritores.component';
import { ListaLibrosComponent } from './componentes/lista-libros/lista-libros.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/escritores'},
  {path: 'escritores', component: ListaEscritoresComponent},
  {path: 'escritores/:escritorId', component: DetalleEscritorComponent, children: [
    {path: 'libros', component:ListaLibrosComponent}
  ]},
  {path: '**', redirectTo: '/escritores'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
