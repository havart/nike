import { Component } from '@angular/core';
import { BtnType } from '../../ui/btn.type';

@Component({
  selector: 'app-super-quality',
  templateUrl: './super-quality.component.html',
  styleUrls: ['./super-quality.component.scss'],
})
export class SuperQualityComponent {
  public btnType = BtnType.PRIMARY;
}
