import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';


@NgModule({
  imports: [
    SharedModule,
    InicioRoutingModule
  ],
  declarations: [InicioComponent]
  
})
export class InicioModule { }
