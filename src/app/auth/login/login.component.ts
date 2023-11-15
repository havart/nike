import { Component, inject } from '@angular/core';
import { BtnType } from '../../main/ui/btn.type';
import { LoginService } from '../services/login.service';
import { finalize } from 'rxjs/operators';
import { SignInInterface } from '../services/signin.interface';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public btnType = BtnType.PRIMARY;
  public loginService = inject(LoginService);
  public loading = false;
  public email!: string;
  public password!: string;

  public signIn(params: SignInInterface): void {
    this.loading = true;
    this.loginService
      .signIn$(params)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({ next: console.log, error: console.log });
  }
}
