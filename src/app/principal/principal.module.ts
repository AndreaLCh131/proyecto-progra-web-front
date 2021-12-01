import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { SeccionModule } from '../shared/components/seccion.module';
import { SharedModule } from '../shared/modules/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule, 
    SeccionModule,
    PrincipalRoutingModule
  ],
  declarations: [
    PrincipalComponent
  ],
  
})
export class PrincipalModule { }
