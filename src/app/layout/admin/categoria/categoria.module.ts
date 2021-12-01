import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria.component';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { TableModule } from 'primeng/table';
import { SharedModule } from 'src/app/shared/modules/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    CategoriaRoutingModule
  ],
  declarations: [CategoriaComponent, ListadoComponent, NuevoComponent]
})
export class CategoriaModule { }
