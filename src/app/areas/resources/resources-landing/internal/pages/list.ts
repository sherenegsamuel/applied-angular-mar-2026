import { httpResource } from '@angular/common/http';
import { Component } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { ExtractHostPipe } from '../../../util-pipes/extract-host';
import { ResourceApiItemModel } from '../types';
import { Card } from '../widgets/card';

@Component({
  selector: 'app-resources-pages-list',
  imports: [PageLayout, ExtractHostPipe, Card],
  template: `<app-ui-page title="Developer Resource List">
    @if (linksResource.isLoading()) {
      <span class="loading loading-spinner text-primary"></span>
    } @else {
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        @for (link of linksResource.value(); track link.id) {
          <app-resources-widgets-card [title]="link.title">
            <a class="btn btn-primary btn-xs" [href]="link.url" target="_blank"
              >Visit {{ link.url | extractHost: true }}</a
            >
          </app-resources-widgets-card>
        } @empty {
          <div class="alert alert-error">No resources found.</div>
        }
      </div>
    }
  </app-ui-page>`,
  styles: ``,
})
export class ListPage {
  linksResource = httpResource<ResourceApiItemModel[]>(() => '/api/resources');
}
