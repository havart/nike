import { Component } from '@angular/core';
import { services } from '../../constant';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  public services = services;
}
