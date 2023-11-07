import { Component } from '@angular/core';
import { BtnType } from '../../main/ui/btn.type';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public btnType = BtnType.PRIMARY;
}
