import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactivoComponent } from './pages/reactivo/reactivo.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [

  { path: 'template', component: TemplateComponent },
  { path: 'reactivo', component: ReactivoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'reactivo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
