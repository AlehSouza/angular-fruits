import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TabelaComponent } from './pages/tabela/tabela.component';
import { JsonComponent } from './pages/json/json.component';
import { ParamsComponent } from './pages/params/params.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tabela', component: TabelaComponent },
    { path: 'params', component: ParamsComponent},
    { path: 'json', component: JsonComponent },
    { path: '404', component: NotFoundComponent},
    { path: '**', redirectTo: '/404'}
];
