import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AUTH_APP } from 'src/app/app.config';

export const isAuthorizedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = localStorage.getItem('user');

  if (!user) {
    router.navigate(['auth/sign-in']);
  }

  return true;
};
