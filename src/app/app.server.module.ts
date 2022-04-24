import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule  } from '@angular/platform-server';
import { TransferState } from '@angular/platform-browser';

// Translate modules
import { TranslateLoader, TranslateModule, TranslateService  } from '@ngx-translate/core';
import { translateServerLoaderFactory } from './utils/translate-server.loader';

// Localize modules
import { ROUTES as routes } from '../portfolio/portfolio.module'
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { localizeServerLoaderFactory } from './utils/localize-server.loader';
import { Location } from '@angular/common';

import { AppModule } from './app.module';
import { AppComponent } from './containers/app/app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    TranslateModule.forRoot({
      defaultLanguage: 'sk',
      loader: {
        provide: TranslateLoader,
        useFactory: translateServerLoaderFactory,
        deps: [TransferState]
      }
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeServerLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, TransferState],
      },
      initialNavigation: true,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
