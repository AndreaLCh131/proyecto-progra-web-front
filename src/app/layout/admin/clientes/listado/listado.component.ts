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
      { field: 'nombres', header: 'Nombre y Apellido' },
      { field: 'dni', header: 'DNI' },
      { field: 'correo', header: 'Correo' },
      { field: 'numero', header: 'Teléfono' },
      { field: 'accion', header: 'Acción'},
    ];
    this.listado = [
    {"id": 200, "nombres":"Pepe Roman", "dni":"48691823", "correo":"peper@gmail.com", "numero":"987256710"},
    {"id": 220, "nombres":"Dennys Gallardo", "dni":"84760154", "correo":"dgallardo@gmail.com", "numero":"987253652"},
    {"id": 240, "nombres":"Carlos Portocarrero", "dni":"21496070", "correo":"carlport@gmail.com", "numero":"Michael 987258854"},
    {"id": 260, "nombres":"Maria Rivera", "dni":"10141280", "correo":"mariarivera@gmail.com", "numero":"987254031"},
    {"id": 280, "nombres":"Lilibeth Gonzales", "dni":"25057190", "correo":"lilig@gmail.com", "numero":"987269710"}
    ];
  }
  onClickNuevo() {
    this.router.navigate(["nuevo"], { relativeTo: this.activatedRoute });
  }

  onClickModificar(id: number) {
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }
}