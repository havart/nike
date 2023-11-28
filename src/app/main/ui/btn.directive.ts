import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[btn] ',
  standalone: true,
})
export class BtnDirective {
  @HostBinding('class')
  public get twClasses() {
    return `flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full`;
  }
}
