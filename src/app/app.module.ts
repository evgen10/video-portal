import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './elements/footer/footer.component';
import { HeaderComponent } from './elements/header/header.component';
import { CourceSearchComponent } from './cources/cource-search/cource-search.component';
import { CourceListComponent } from './cources/cource-list/cource-list.component';
import { CourceComponent } from './cources/cource/cource.component';
import { BreadcrumbsComponent } from './elements/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './elements/logo/logo.component';
import { FormsModule } from '@angular/forms';
import { CourceHighlightDirective } from './cources/cource/directives/cource-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent,
    CourceListComponent,
    CourceComponent,
    CourceSearchComponent,
    CourceHighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
