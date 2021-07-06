
import { UsuarioNovoComponent } from './usuario-novo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioDetalheComponent } from './usuario-detalhe.component';
import { Routes } from '@angular/router';


export const USUARIO_ROUTES: Routes = [

     { path: 'novo', component: UsuarioNovoComponent },
     { path: 'editar', component: UsuarioEditarComponent },
     { path: 'detalhe', component: UsuarioDetalheComponent },
     { path: '**', pathMatch: 'full', redirectTo: 'novo'}


]