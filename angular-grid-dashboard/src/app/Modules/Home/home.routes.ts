import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const featureRoute: Routes = [
    { path: 'dashboard', loadComponent: () => import('../Home/components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
    { path: 'profile', loadComponent: () => import('../Home/components/profile/profile.component').then(m => m.ProfileComponent) }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(featureRoute)],
    exports: [RouterModule]
  })
  export class HomeRouteModule {}
  