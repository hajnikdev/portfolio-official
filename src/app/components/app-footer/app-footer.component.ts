import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export enum FooterType {
  DEFAULT = 'default',
  SIMPLE = 'simple',
}

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFooterComponent {
  @Input() type: FooterType | string = FooterType.DEFAULT;
}
