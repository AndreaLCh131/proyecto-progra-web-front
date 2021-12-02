import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  colsListadoBanner: any[];
  listado: any [];
  constructor( private router: Router,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.inicializarDatos();
  }

  inicializarDatos(){
    this.colsListadoBanner = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'categoriaId', header: 'categoriaId' }
    ];
    this.listado = [{"nombre": "Fultbol", "categoriaId":"10234"},
    {"nombre": "Baloncesto", "categoriaId":"10235"},
    {"nombre": "Natación", "categoriaId":"10236"},
    {"nombre": "Voley", "categoriaId":"10237"},
    {"nombre": "Tennis", "categoriaId":"10238"},
    {"nombre": "Carrera caballos", "categoriaId":"10239"}];
  }

  onClickNuevo() {
    this.router.navigate(["nuevo"], { relativeTo: this.activatedRoute });
  }

  onClickModificar(categoriaId: number) {
    this.router.navigate([categoriaId], { relativeTo: this.activatedRoute });
  }
}
