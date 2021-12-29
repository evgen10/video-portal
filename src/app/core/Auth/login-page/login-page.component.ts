import { Route } from '@angular/compiler/src/core';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILogin } from '../../models/login';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public userLogin: string = '';
  public userPassword: string = '';

  ngOnInit(): void {
  }

  public login() {
    const loginData: ILogin = {
      login: this.userLogin,
      password: this.userPassword
    };

    this.authService.login(loginData);
  }
}
