import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { BasicCard } from '@ht/shared/ui-common/cards/basic-card';

@Component({
  selector: 'ht-signalsdemos-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout, BasicCard],
  template: `<app-ui-page title="Signals">
    <app-ui-card-basic title="Welcome">
      <p>This thing on?</p>
    </app-ui-card-basic>
  </app-ui-page>`,
  styles: ``,
})
export class HomePage {}
