import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegoComponent } from './juego.component';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';

const routes: Routes = [{
  path:'',
  component: JuegoComponent,
  children: [  
    { path:'', component:  ListadoComponent, pathMatch:'full'  },
    { path:'nuevo', component: NuevoComponent },
    { path:':id', component: NuevoComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegoRoutingModule { }