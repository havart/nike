import { Component } from '@angular/core';
import { footerLinks, socialMedia } from '../../constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public socialMedia = socialMedia;
  public footerLinks = footerLinks;
}
