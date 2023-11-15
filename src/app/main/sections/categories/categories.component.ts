import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemWidgetComponent } from '../../components/item-widget/item-widget.component';
import { productCategories } from '../../constant';
import { BtnDirective } from '../../ui/btn.directive';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, ItemWidgetComponent, BtnDirective, MatRippleModule],
  template: `
    <h3 class="font-palanquin text-4xl font-bold text-center">
      What's
      <span class="text-coral-red">Your</span>
      Choice?
    </h3>
    <div
      class="mt-16 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
    >
      <ng-container *ngFor="let product of productCategories">
        <app-item-widget
          [headerTemplate]="titleRef"
          [contentTemplate]="contentRef"
          [actionTemplate]="actionRef"
        ></app-item-widget>
        <ng-template #titleRef>
          <h1 class="absolute text-white pt-5 px-5 font-montserrat text-xl">
            {{ product.title }}
          </h1>
        </ng-template>
        <ng-template #contentRef>
          <img [src]="product.thumbnail" width="400" height="400" alt="" />
        </ng-template>
        <ng-template #actionRef>
          <button
            matRipple
            class="flex justify-center items-center gap-2 px-5 py-2 border font-montserrat text-md leading-none rounded-full bg-white"
            *ngFor="let category of product.categories"
          >
            {{ category }}
          </button>
        </ng-template>
      </ng-container>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  public productCategories = productCategories;
}
