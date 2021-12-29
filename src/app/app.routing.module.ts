import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/Auth/auth.guard';
import { LoginPageComponent } from './core/Auth/login-page/login-page.component';
import { AddCourceComponent } from './cources/add-cource/add-cource.component';
import { CourceListComponent } from './cources/cource-list/cource-list.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'cources', pathMatch: 'full' },
  { path: 'cources', component: CourceListComponent,  canActivate:[AuthGuard] },
  { path: 'cources/:id', component: AddCourceComponent,   canActivate:[AuthGuard] },
  { path: 'cources/new', component: AddCourceComponent,  canActivate:[AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: 'error'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
