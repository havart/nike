import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { BtnDirective } from '../main/ui/btn.directive';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignUpComponent],
  imports: [CommonModule, AuthRoutingModule, BtnDirective],
})
export class AuthModule {}
