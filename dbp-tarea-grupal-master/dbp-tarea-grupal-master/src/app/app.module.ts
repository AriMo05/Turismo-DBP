import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ExplorarComponent } from './componentes/explorar/explorar.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HabitacionesComponent } from './componentes/habitaciones/habitaciones.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { LugarService } from './servicios/lugar.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ExplorarComponent,
    AcercaComponent,
    NavbarComponent,
    FooterComponent,
    HabitacionesComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LugarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
