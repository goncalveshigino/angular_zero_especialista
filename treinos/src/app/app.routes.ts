import { RouterModule, Routes } from "@angular/router";


import { HomeComponent } from "./components/home/home.component";
import { UsuarioComponent } from './components/usuario/usuario.component';



const app_routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];


export const APP_ROUTING = RouterModule.forRoot(app_routes);

