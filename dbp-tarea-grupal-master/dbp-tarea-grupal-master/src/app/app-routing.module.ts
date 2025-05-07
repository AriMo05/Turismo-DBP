import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ExplorarComponent } from './componentes/explorar/explorar.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { HabitacionesComponent } from './componentes/habitaciones/habitaciones.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'explorar', component: ExplorarComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'lugares/:id/habitaciones', component: HabitacionesComponent}, // Ruta para habitaciones
  { path: '**', redirectTo: '' }, // Redirige rutas no reconocidas a Inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }