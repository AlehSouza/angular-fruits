import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TableComponent } from './pages/table/table.component';
import { JsonComponent } from './pages/json/json.component';
import { ParamsComponent } from './pages/params/params.component';
import { SellersComponent } from './pages/sellers/sellers.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'table', component: TableComponent },
    { path: 'sellers', component: SellersComponent},
    { path: 'params', component: ParamsComponent},
    { path: 'json', component: JsonComponent },
    { path: '404', component: NotFoundComponent},
    { path: '**', redirectTo: '/404'}
];
