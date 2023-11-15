import { Component, inject } from '@angular/core';
import { BtnType } from '../../main/ui/btn.type';
import { LoginService } from '../services/login.service';
import { finalize } from 'rxjs/operators';
import { SignInInterface } from '../services/signin.interface';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public btnType = BtnType.PRIMARY;
  public loginService = inject(LoginService);
  public router = inject(Router);
  public loading = false;
  public email!: string;
  public password!: string;

  public signIn(params: SignInInterface): void {
    this.loading = true;
    this.loginService
      .signIn$(params)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({ complete: () => this.router.navigate(['../']) });
  }
}
