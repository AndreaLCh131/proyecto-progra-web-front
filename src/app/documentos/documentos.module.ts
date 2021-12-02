import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentosRoutingModule } from './documentos-routing.module';
import { DocumentosComponent } from './documentos.component';
import { TerminosComponent } from './terminos/terminos.component';
import { ReglasComponent } from './reglas/reglas.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { SeccionModule } from '../shared/components/seccion.module';
import { LoginRoutingModule } from '../login/login-routing.module';


@NgModule({
  declarations: [
    DocumentosComponent, TerminosComponent, ReglasComponent, NosotrosComponent
  ],
  imports: [
    CommonModule,
    SeccionModule,
    LoginRoutingModule,
    DocumentosRoutingModule
  ]
})
export class DocumentosModule { }
