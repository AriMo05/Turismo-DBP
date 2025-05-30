import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorarComponent } from './componentes/explorar/explorar.component';

const routes: Routes = [
  { path: 'explorar', component: ExplorarComponent },
  { path: '', redirectTo: '/explorar', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/explorar' } // Ruta para manejar errores
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}