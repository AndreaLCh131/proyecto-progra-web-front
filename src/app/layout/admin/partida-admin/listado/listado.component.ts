import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  colsListadoPartida: any[];
  listado: any [];
  constructor( private router: Router,  private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.inicializarDatos();
  }
  inicializarDatos(){
    this.colsListadoPartida = [
      { field: 'id', header: 'ID' },
      { field: 'nombre', header: 'Juego' },
      { field: 'fecha', header: 'Fecha' },
      { field: 'tiempo', header: 'Duración' },
      { field: 'equipoA', header: 'Equipo A' },
      { field: 'equipoB', header: 'Equipo B' },
      { field: 'estado', header: 'Status'},
      { field: 'accion', header: 'Acción'},
    ];
    this.listado = [
    {"id": 100, "nombre":"Futbol", "fecha": "12/11/21", "tiempo":"50", "equipoA":"Cristal", "equipoB":"Universitario", "estado":"Iniciado"},
    {"id": 120, "nombre":"Voley", "fecha": "14/11/21", "tiempo":"60", "equipoA":"Perú", "equipoB":"Brazil","estado":"Pendiente"},
    {"id": 140, "nombre":"Basket", "fecha": "16/11/21", "tiempo":"70", "equipoA":"LeBron James", "equipoB":"Michael Jordan","estado":"Finalizado"},
    {"id": 160, "nombre":"Golf", "fecha": "18/11/21", "tiempo":"80", "equipoA":"Tiger Woods", "equipoB":"Jhon Rahn","estado":"Iniciado"},
    {"id": 180, "nombre":"Tennis", "fecha": "20/11/21", "tiempo":"90", "equipoA":"Rafael Nadal", "equipoB":"Roger Federer","estado":"Pendiente"}
    ];
  }
  onClickNuevo() {
    this.router.navigate(["nuevo"], { relativeTo: this.activatedRoute });
  }

  onClickModificar(id: number) {
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }
}