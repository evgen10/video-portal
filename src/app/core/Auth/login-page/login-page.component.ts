import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ILogin } from '../../models/login';
import { login } from '../store/auth.actions';
import { selectAuthitification } from '../store/auth.selectors';
import { AuthState } from '../store/auth.state';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {

  private isAuthenticated$ = this.store.select(selectAuthitification);
  private subscriptions: Subscription[] = [];

  public userLogin: string = '';
  public userPassword: string = '';

  constructor(
    private store: Store<AuthState>,
    private route: Router) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    var sub = this.isAuthenticated$.subscribe(value => {
      if (value) {
        this.route.navigate(['/cources']);
      }
    })
    this.subscriptions.push(sub);
  }
  public login() {
    const loginData: ILogin = {
      login: this.userLogin,
      password: this.userPassword
    };
    this.store.dispatch(login({ loginData: loginData }));
  }
}
