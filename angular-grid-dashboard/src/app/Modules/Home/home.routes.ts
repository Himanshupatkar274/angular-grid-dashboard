import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const featureRoute: Routes = [
    { path: 'dashboard', loadComponent: () => import('../Home/components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
    { path: 'profile', loadComponent: () => import('../Home/components/profile/profile.component').then(m => m.ProfileComponent) },
    { path: 'home', loadComponent: () => import('../Home/components/home/home.component').then(m => m.HomeComponent) },
    { path: 'growth', loadComponent: () => import('../Home/components/growth/growth.component').then(m => m.GrowthComponent) },
    { path: 'security', loadComponent: () => import('../Home/components/scurity/scurity.component').then(m => m.ScurityComponent) },
    { path: 'achive', loadComponent: () => import('../Home/components/achivement/achivement.component').then(m => m.AchivementComponent) },
    { path: 'explore', loadComponent: () => import('../Home/components/explore/explore.component').then(m => m.ExploreComponent) },
    { path: 'leaderboard', loadComponent: () => import('../Home/components/leaderboard/leaderboard.component').then(m => m.LeaderboardComponent) },
    { path: 'community', loadComponent: () => import('../Home/components/community/community.component').then(m => m.CommunityComponent) },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(featureRoute)],
    exports: [RouterModule]
  })
  export class HomeRouteModule {}
  