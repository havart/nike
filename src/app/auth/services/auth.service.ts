import { Injectable, inject } from '@angular/core';
import { SignInInterface } from './signin.interface';
import { Observable, from } from 'rxjs';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AUTH } from 'src/app/app.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(AUTH);

  sigIn$({ email, password }: SignInInterface): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
}
