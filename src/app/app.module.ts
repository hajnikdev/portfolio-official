import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { Location } from "@angular/common";
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ROUTES as routes } from '../portfolio/portfolio.module'

// Translate modules
import { TranslateLoader, TranslateModule, TranslateService  } from '@ngx-translate/core';
import { translateBrowserLoaderFactory } from './utils/translate-browser.loader';

import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { localizeBrowserLoaderFactory } from './utils/localize-browser.loader';

// Feature Modules
import { PortfolioModule } from 'src/portfolio/portfolio.module';

// Containers
import { AppComponent } from './containers/app/app.component';

// Components
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserTransferStateModule,
    TranslateModule.forRoot({
      defaultLanguage: 'sk',
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState]
      }
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeBrowserLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient, TransferState],
      },
      initialNavigation: true,
    }),
    PortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
