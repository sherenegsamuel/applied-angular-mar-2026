import { Component, inject } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { counterStore } from '../stores/counter-store';

@Component({
  selector: 'app-demos-pages-counter-prefs',
  providers: [],
  imports: [PageLayout],
  template: `<app-ui-page title="counter-prefs">
    <div class="join">
      @for (by of store.availableCountByValues; track by) {
        <button (click)="store.setBy(by)" [disabled]="store.by() === by" class="btn join-item">
          {{ by }}
        </button>
      }
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class PrefsPage {
  store = inject(counterStore);
}
