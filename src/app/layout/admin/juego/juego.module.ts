import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegoRoutingModule } from './juego-routing.module';
import { JuegoComponent } from './juego.component';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { TableModule } from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    JuegoRoutingModule
  ],
  declarations: [JuegoComponent,ListadoComponent, NuevoComponent]
})
export class JuegoModule { }
