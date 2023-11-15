import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AUTH } from 'src/app/app.config';

export const isAuthorizedGuard: CanActivateFn = (route, state) => {
  const auth = inject(AUTH);
  const router = inject(Router);

  if (!auth.currentUser) {
    router.navigate(['auth/sign-in']);
  }

  return true;
};
