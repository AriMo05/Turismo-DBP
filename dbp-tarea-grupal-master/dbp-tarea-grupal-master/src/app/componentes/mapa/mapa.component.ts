import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LugarService } from '../../servicios/lugar.service';
import { Router } from '@angular/router'; // Importa el servicio Router

@Component({
  selector: 'app-mapa',
  standalone: false,
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit, OnInit {
  private map!: L.Map;

  constructor(private lugarService: LugarService, private router: Router) {} // Inyecta el servicio Router

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([-1.8312, -78.1834], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const lugares = [
      {
        coords: [-0.1807, -78.4678],
        data: { nombre: 'Quito', descripcion: 'Capital del Ecuador, ubicada en la Sierra.', imagen: 'assets/img/quito.jpg', id: 1 }
      },
      {
        coords: [-1.0547, -80.4525],
        data: { nombre: 'Portoviejo', descripcion: 'Ciudad costera, capital de Manabí.', imagen: 'assets/img/portoviejo.jpg', id: 2 }
      },
      {
        coords: [-2.1700, -79.9224],
        data: { nombre: 'Guayaquil', descripcion: 'Principal puerto del Ecuador, ciudad moderna y cálida.', imagen: 'assets/img/guayaquil.jpg', id: 3 }
      },
      {
        coords: [-2.9006, -79.0045],
        data: { nombre: 'Cuenca', descripcion: 'Ciudad colonial en la Sierra, conocida por su arquitectura.', imagen: 'assets/img/cuenca.jpg', id: 4 }
      },
      {
        coords: [-0.9538, -90.9656],
        data: { nombre: 'Galápagos', descripcion: 'Archipiélago único con biodiversidad extraordinaria.', imagen: 'assets/img/galapagos.jpg', id: 5 }
      }
    ];

    lugares.forEach(lugar => {
      L.marker(lugar.coords as L.LatLngTuple)
        .addTo(this.map)
        .on('click', () => {
          console.log('Lugar clickeado:', lugar.data); // Verifica que los datos sean válidos
          this.lugarService.seleccionarLugar(lugar.data); // Actualiza el lugar seleccionado en el servicio
          this.router.navigate(['/explorar']); // Redirige a la ruta de explorar
        });
    });
  }
}
