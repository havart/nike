import { Injectable, computed, inject, signal } from '@angular/core';
import { SignInInterface } from './signin.interface';
import { EMPTY, Observable, catchError, defer, from, tap } from 'rxjs';
import {
  UserCredential,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { AUTH_APP } from 'src/app/app.config';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseError } from 'firebase/app';
import { IAuthState } from './auth-state.interafce';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(AUTH_APP);

  private state = signal<IAuthState>({
    user: undefined,
  });
  private _snackBar = inject(MatSnackBar);

  public user = computed(() => this.state().user);

  sigIn$({ email, password }: SignInInterface): Observable<any> {
    return from(
      defer(() => signInWithEmailAndPassword(this.auth, email, password))
    ).pipe(
      tap(() => {
        const user = this.auth.currentUser;
        this.state.set({ user });
        localStorage.setItem('user', JSON.stringify(user));
      }),
      catchError((err: FirebaseError) => {
        this._snackBar.open(err.message, 'OK');
        localStorage.removeItem('user');
        this.state.set({ user: null });

        return EMPTY;
      })
    );
  }

  signOut(): void {
    signOut(this.auth);
  }
}
