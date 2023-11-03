import { Directive, HostBinding, Input } from '@angular/core';
import { BtnType } from './btn.type';

@Directive({
  selector: '[btn]',
  standalone: true,
})
export class BtnDirective {
  @Input()
  public type: BtnType = BtnType.DEFAULT;
  @HostBinding('class')
  public get twClasses() {
    return `flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
      this.type === BtnType.PRIMARY
        ? 'text-white border-coral-red bg-coral-red'
        : 'bg-white border-slate-gray text-slate-gray'
    }`;
  }

  constructor() {}
}
