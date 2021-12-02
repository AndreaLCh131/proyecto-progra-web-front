import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SeccionModule } from '../shared/components/seccion.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/modules/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule, SharedModule, SeccionModule
  ],
  declarations: [LoginComponent],

})
export class LoginModule { }
