import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IReview } from './review.interface';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewCardComponent {
  @Input() review!: IReview;
}
