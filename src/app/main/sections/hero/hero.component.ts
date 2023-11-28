import { ChangeDetectionStrategy, Component } from '@angular/core';
import { shoes, statistics } from '../../constant';
import { IShoe } from '../../components/shoe-card/shoe.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  public statistics = statistics;
  public shoes = shoes;
  public selectedShoe = shoes[0];

  public onShoeSelect(shoe: IShoe): void {
    this.selectedShoe = shoe;
  }
}
