import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IService } from '../../sections/services/service.interface';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent {
  @Input()
  public service!: IService;
}
