import { NgModule, Provider } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { IfAuthenticatedDirective } from './login-page/if-authenticated.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { authKey } from './store/auth.state';
import { authReducer } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';
import { AuthInterceptor } from './auth.interceptor';


const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    LoginPageComponent,
    IfAuthenticatedDirective
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(authKey, authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [
    IfAuthenticatedDirective,
    LoginPageComponent
  ],
  providers: [INTERCEPTOR_PROVIDER]
})
export class AuthModule { }
