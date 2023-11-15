import { Component, inject } from '@angular/core';
import { navLinks } from './nav.constant';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  private authService = inject(AuthService);

  navLinks = navLinks;

  public get userSignedIn(): boolean {
    return !!this.authService.user;
  }
}
