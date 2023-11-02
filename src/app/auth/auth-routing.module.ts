import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./sign-up/sign-up.component').then((c) => c.SignUpComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}