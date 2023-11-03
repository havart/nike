import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '../../sections/popular-products/product.interface';

@Component({
  selector: 'app-popular-product-card',
  templateUrl: './popular-product-card.component.html',
  styleUrls: ['./popular-product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularProductCardComponent {
  @Input()
  public product!: IProduct;
}
