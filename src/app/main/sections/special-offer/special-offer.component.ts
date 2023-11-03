import { Component } from '@angular/core';
import { BtnType } from '../../ui/btn.type';

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.scss'],
})
export class SpecialOfferComponent {
  public btnType = BtnType.PRIMARY;
}
