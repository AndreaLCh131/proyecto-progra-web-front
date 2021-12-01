import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidaAdminRoutingModule } from './partida-admin-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { PartidaAdminComponent } from './partida-admin.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { TableModule } from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    PartidaAdminRoutingModule
  ],
  declarations: [PartidaAdminComponent, ListadoComponent, NuevoComponent],
})
export class PartidaAdminModule { }
