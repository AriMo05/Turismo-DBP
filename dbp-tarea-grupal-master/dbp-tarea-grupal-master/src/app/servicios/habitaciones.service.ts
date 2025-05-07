import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {
  private apiUrl = 'http://localhost:8000/api/lugares/';

  constructor(private http: HttpClient) {}

  obtenerHabitaciones(id:number): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+id+'/habitaciones/');
  }
}
