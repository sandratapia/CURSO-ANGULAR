import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { CurriculumComponent } from './componentes/curriculum/curriculum.component';
import { DetalleEmpleadoComponent } from './componentes/detalle-empleado/detalle-empleado.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { InfoComponent } from './componentes/info/info.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { RandomGuard } from './random.guard';

const routes: Routes = [
  //COMO HACER PARA REDIRIGIR A LA HOME??
  {path: '', pathMatch: 'full', redirectTo: ''},
  {path: 'informacion', component: InfoComponent, canActivate: [RandomGuard]},
  {path: 'sobre', component: AboutComponent},
  {path: 'contacto', component: ContactComponent},
  //PONEMOS LOS DOS PUNTOS PARA HACER UNA DIRECCION DINAMICA
  //LAS RUTAS HIJAS NO PUEDENE EXISTIR POR SI MISMAAS, NECESITAN DEL PADRE
  {path: 'empleados/:empleadoId', component: DetalleEmpleadoComponent, children: [
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'experiencia', component: ExperienciaComponent},
    {path: 'curriculum', component: CurriculumComponent},
  ]},
  //CUANDO HA COMPROBADO TODAS LAS RUTAS Y NO ENTRA POR NINGUNA ENTRARÍA POR ESTA
  {path: '**', redirectTo: 'contacto'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
