import { Component } from '@angular/core';
import { BtnType } from 'src/app/main/ui/btn.type';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  public btnType = BtnType.PRIMARY;
}
