import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Importa el servicio Router

@Component({
  selector: 'app-explorar',
  standalone: false,
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.css']
})
export class ExplorarComponent implements OnInit {
  lugares: any[] = [];
  cargando: boolean = false;
  error: string = '';

  constructor(private http: HttpClient, private router: Router) {} // Inyecta el servicio Router

  ngOnInit(): void {
    this.cargarLugares();
  }

  cargarLugares(): void {
    this.cargando = true;
    this.error = '';

    this.http.get<any[]>('http://localhost:8000/api/lugares/') // Cambia la URL según tu configuración
      .subscribe({
        next: (data) => {
          this.lugares = data;
          this.cargando = false;
        },
        error: (err) => {
          console.error(err);
          this.error = 'No se pudieron cargar los lugares.';
          this.cargando = false;
        }
      });
  }

  buscarHabitaciones(lugarId: number): void {
    // Redirige a la ruta con el ID del lugar
    this.router.navigate([`/lugares/${lugarId}/habitaciones`]);
  }
}
