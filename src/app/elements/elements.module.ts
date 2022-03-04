import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../core/Auth/auth.module';
import { LoadingComponent } from './loading/loading.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { loadingReducer } from './loading/store/loading.reducer';
import { loadingKey } from './loading/store/loading.state';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent,
    LoadingComponent],
  imports: [
    SharedModule,
    AuthModule,
    StoreModule.forFeature(loadingKey, loadingReducer),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent,
    LoadingComponent
  ]
})
export class ElementsModule { }
