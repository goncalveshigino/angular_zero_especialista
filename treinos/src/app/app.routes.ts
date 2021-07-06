import { RouterModule, Routes } from "@angular/router";


import { HomeComponent } from "./components/home/home.component";
import { UsuarioComponent } from './components/usuario/usuario.component';

import { UsuarioNovoComponent } from './components/usuario/usuario-novo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalheComponent } from './components/usuario/usuario-detalhe.component';



const app_routes: Routes = [

    { path: 'home', component: HomeComponent },
    {
        path: 'usuario/:id',
        component: UsuarioComponent,
        children: [
            { path: 'novo', component: UsuarioNovoComponent },
            { path: 'editar', component: UsuarioEditarComponent },
            { path: 'detalhe', component: UsuarioDetalheComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'novo'}
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];


export const APP_ROUTING = RouterModule.forRoot(app_routes);

