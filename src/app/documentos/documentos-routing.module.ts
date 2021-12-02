import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentosComponent } from './documentos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ReglasComponent } from './reglas/reglas.component';
import { TerminosComponent } from './terminos/terminos.component';

const routes: Routes = [
 
  {
    path: '', component: DocumentosComponent,
    children: [
      { path: 'terminos', component: TerminosComponent },
      { path: 'reglas',  component: ReglasComponent},
      { path: 'nosotros', component: NosotrosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentosRoutingModule { }
