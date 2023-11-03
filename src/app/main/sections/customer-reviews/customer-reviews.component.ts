import { Component } from '@angular/core';
import { reviews } from '../../constant';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.scss'],
})
export class CustomerReviewsComponent {
  public reviews = reviews;
}
