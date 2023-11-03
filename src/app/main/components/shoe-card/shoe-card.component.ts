import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IShoe } from './shoe.interface';

@Component({
  selector: 'app-shoe-card',
  templateUrl: './shoe-card.component.html',
  styleUrls: ['./shoe-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoeCardComponent {
  @Input() shoe!: IShoe;
  @Input() isSelected!: boolean;

  @Output() select = new EventEmitter();
}
