import { Component, input } from '@angular/core';

@Component({
  selector: 'app-resources-widgets-card',
  imports: [],
  template: ` <div class="card bg-base-100 card-xs shadow-sm">
    <div class="card-body">
      <h2 class="card-title text-xl text-accent">{{ title() }}</h2>
      <div class="p-4 rounded-lg border-2 border-black">
        <ng-content />
      </div>
    </div>
  </div>`,
  styles: ``,
})
export class Card {
  title = input.required<string>();
}
