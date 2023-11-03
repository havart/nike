import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[btn]',
  standalone: true,
})
export class BtnDirective {
  @HostBinding('class')
  private twClasses =
    'flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red';

  constructor() {}
}
