import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex -space-x-2 overflow-hidden rounded-full cursor-pointer bg-coral-red"
    >
      <img
        class="inline-block h-7 w-7  fill-slate-50"
        [src]="user?.photoURL || './assets/icons/user.svg'"
        alt="Avatar"
      />
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  public user: User | null | undefined;
}
