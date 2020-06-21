import $ from 'jquery';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

(window as any).jQuery = $;
(window as any).$ = $;

async function start(): Promise<void> {
  if (environment.production) {
    enableProdMode();
  }

  await import('materialize-css/dist/js/materialize.min.js');
  await platformBrowserDynamic().bootstrapModule(AppModule);
}

start().catch(err => console.error(err));
