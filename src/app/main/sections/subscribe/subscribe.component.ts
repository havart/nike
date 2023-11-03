import { Component } from '@angular/core';
import { BtnType } from '../../ui/btn.type';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent {
  public btnType = BtnType.PRIMARY;
}
