import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbrirCuentaRoutingModule } from './abrir-cuenta-routing.module';
import { AbrirCuentaComponent } from './abrir-cuenta.component';
import { SeccionModule } from '../shared/components/seccion.module';
import {StepsModule} from 'primeng/steps';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import { SharedModule } from '../shared/modules/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule, SeccionModule,
    CardModule,
    StepsModule,
    MenuModule,
    DropdownModule,ButtonModule,
    InputTextModule,
    FileUploadModule,
    AbrirCuentaRoutingModule, 
  ],
  declarations: [AbrirCuentaComponent]
})
export class AbrirCuentaModule { }
