import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { SignInInterface } from './signin.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loading = false;
  private authService = inject(AuthService);

  constructor() {}

  signIn$(params: SignInInterface): Observable<any> {
    return this.authService.sigIn$(params);
  }
}
