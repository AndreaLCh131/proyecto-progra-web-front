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
      { field: 'categoria', header: 'Categoria' },
      { field: 'accion', header: 'Acción'},
    ];
    this.listado = [
    {"id": 100, "nombre":"Futbol", "categoria": "Liga Campeones", "tiempo":"50", "estado":"Iniciado"},
    {"id": 120, "nombre":"Voley", "categoria": "Olimpiadas", "tiempo":"60", "estado":"Pendiente"},
    {"id": 140, "nombre":"Poker", "categoria": "El mundial", "tiempo":"70", "estado":"Finalizado"},
    {"id": 160, "nombre":"Carreras", "categoria": "La Gran final", "tiempo":"80", "estado":"Iniciado"},
    {"id": 180, "nombre":"Tennis", "categoria": "Copa Libertadores", "tiempo":"90", "estado":"Pendiente"}
    ];
  }
  onClickNuevo() {
    this.router.navigate(["nuevo"], { relativeTo: this.activatedRoute });
  }

  onClickModificar(id: number) {
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }
}