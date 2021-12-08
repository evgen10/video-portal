import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { IfAuthenticatedDirective } from './login-page/if-authenticated.directive';



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
  ]
})
export class AuthModule { }
