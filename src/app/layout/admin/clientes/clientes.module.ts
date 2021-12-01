import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ListadoComponent } from './listado/listado.component';
import { TableModule } from 'primeng/table';
import { ClientesComponent } from './clientes.component';
import { ClientesRoutingModule} from './clientes-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';


@NgModule({
 
  imports: [
    CommonModule,
    SharedModule, 
    TableModule,
    ClientesRoutingModule
  ],
  declarations: [ClientesComponent, ListadoComponent, NuevoComponent],
})
export class ClientesModule { }
