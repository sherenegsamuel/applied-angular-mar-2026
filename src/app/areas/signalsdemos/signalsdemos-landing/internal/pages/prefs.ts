import { Component, inject, signal } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { counterStore } from '../counter-store';

@Component({
  selector: 'app-demos-pages-counter-prefs',
  providers: [],
  imports: [PageLayout],
  template: `<app-ui-page title="counter-prefs">
    <div class="join">
      <button (click)="store.setBy(1)" [disabled]="store.by() === 1" class="btn join-item">
        1
      </button>
      <button (click)="store.setBy(3)" [disabled]="store.by() === 3" class="btn join-item">
        3
      </button>
      <button (click)="store.setBy(5)" [disabled]="store.by() === 5" class="btn join-item">
        5
      </button>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class PrefsPage {
  store = inject(counterStore);
}
