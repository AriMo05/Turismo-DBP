import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LugarService {
  private lugarSeleccionado = new BehaviorSubject<any>(null);
  lugarSeleccionado$ = this.lugarSeleccionado.asObservable();

  constructor() { }

  seleccionarLugar(lugar: any): void {
    console.log('Lugar seleccionado en el servicio:', lugar); // Verifica que los datos sean válidos
    this.lugarSeleccionado.next(lugar);
  }
}
