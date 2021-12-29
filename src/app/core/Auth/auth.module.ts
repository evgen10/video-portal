import { NgModule, Provider } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { IfAuthenticatedDirective } from './login-page/if-authenticated.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
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
    SharedModule
  ],
  exports: [
    IfAuthenticatedDirective,
    LoginPageComponent
  ],
  providers: [INTERCEPTOR_PROVIDER]
})
export class AuthModule { }
