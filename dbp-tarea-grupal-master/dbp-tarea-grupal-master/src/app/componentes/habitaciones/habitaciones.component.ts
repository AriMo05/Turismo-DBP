import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute

@Component({
  selector: 'app-habitaciones',
  standalone: false,
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {
  habitaciones: any[] = [];
  cargando: boolean = false;
  error: string = '';
  lugarId: number | null = null; // Variable para almacenar el ID del lugar

  constructor(private http: HttpClient, private route: ActivatedRoute) {} // Inyecta ActivatedRoute

  ngOnInit(): void {
    // Obtén el ID del lugar desde la URL
    this.route.params.subscribe(params => {
      this.lugarId = +params['id']; // Convierte el parámetro 'id' a número
      this.obtenerHabitaciones(); // Llama a obtenerHabitaciones con el ID
    });
  }

  obtenerHabitaciones(): void {
    if (!this.lugarId) {
      this.error = 'No se proporcionó un ID de lugar válido.';
      return;
    }

    this.cargando = true;
    this.error = '';

    // Usa el ID del lugar en la URL de la API
    this.http.get<any[]>(`http://localhost:8000/api/lugares/${this.lugarId}/habitaciones/`)
      .subscribe({
        next: (data) => {
          this.habitaciones = data;
          this.cargando = false;
        },
        error: (err) => {
          console.error(err);
          this.error = 'No se pudieron cargar las habitaciones.';
          this.cargando = false;
        }
      });
  }
}
