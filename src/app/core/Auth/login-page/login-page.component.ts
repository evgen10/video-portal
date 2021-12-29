import { Route } from '@angular/compiler/src/core';
import {  Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit{

  constructor(private authService: AuthService, private route: Router) { }

  public userLogin: string = '';
  public userPassword: string = '';

  ngOnInit(): void {
  }

  public login(){
    this.authService.login(this.userLogin, this.userPassword)
    console.log('logged in successfully', this.authService.isAuthenticated());
    this.route.navigate(['/cources']);

  }
}
