import { Component } from '@angular/core';
import { products } from '../../constant';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.scss'],
})
export class PopularProductsComponent {
  public products = products;
}
