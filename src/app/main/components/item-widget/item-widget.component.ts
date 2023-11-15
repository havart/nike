import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex relative shadow-md">
      <div class="widget-header">
        <ng-container [ngTemplateOutlet]="headerTemplate"></ng-container>
      </div>
      <div class="widget-content ">
        <ng-container [ngTemplateOutlet]="contentTemplate"></ng-container>
      </div>
      <div class="widget-action absolute bottom-3 px-3 flex gap-3">
        <ng-container [ngTemplateOutlet]="actionTemplate"></ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./item-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemWidgetComponent {
  @Input()
  public headerTemplate!: TemplateRef<any>;
  @Input()
  public contentTemplate!: TemplateRef<any>;
  @Input()
  public actionTemplate!: TemplateRef<any>;
}
