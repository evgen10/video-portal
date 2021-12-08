import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterCourcesPipe } from './cources/cource/pipes/filter-cources.pipe';
import { ElementsModule } from './elements/elements.module';
import { CourceModule } from './cources/cource.module';
import { AuthModule } from './core/Auth/auth.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ElementsModule,
    CourceModule,
    AuthModule,
    SharedModule
  ],
  providers: [FilterCourcesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
