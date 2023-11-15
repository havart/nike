import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthorizedGuard } from './shared/guards/is-authorized.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [isAuthorizedGuard],
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];
