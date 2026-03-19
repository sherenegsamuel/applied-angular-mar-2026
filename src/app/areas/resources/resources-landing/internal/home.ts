import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { SectionLayout, SectionLink } from '@ht/shared/ui-common/layouts/section';
import { authStore } from '@ht/shared/util-auth/store';

@Component({
  selector: 'ht-resources-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionLayout],
  template: `<app-ui-section-layout title="Developer Resources" [links]="links()">
    <p>Welcome, {{ userStore.authResource.value()?.name }}</p>
  </app-ui-section-layout> `,
  styles: ``,
})
export class Home {
  userStore = inject(authStore);
  links = signal<SectionLink[]>([
    {
      title: 'List of Links',
      path: 'list',
    },
    {
      title: 'Add a Link',
      path: 'add',
    },
    {
      title: 'Add a Link Alt',
      path: 'add-2',
    },
  ]);
}
