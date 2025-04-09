import { Routes } from '@angular/router';
import { LayoutComponent } from './Modules/Home/components/layout/layout.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '', component: LayoutComponent, loadChildren:()=> import('./Modules/Home/home.routes').then(m => m.HomeRouteModule)},
];
