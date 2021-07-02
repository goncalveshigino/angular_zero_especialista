import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './components/callback/callback.component';

import { HomeComponent } from './components/home/home.component';
import { PriceComponent } from './components/price/price.component';
import { ProtectedComponent } from './components/protected/protected.component';

const routes: Routes = [

    { path: 'home',               component: HomeComponent },
    { path: 'price',             component: PriceComponent },
    { path: 'protected', component: ProtectedComponent },
    { path: 'callback', component: CallbackComponent },
    { path: '**', pathMatch: 'full',redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}