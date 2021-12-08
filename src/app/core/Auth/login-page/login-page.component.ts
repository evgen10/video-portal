import {  Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit{

  constructor(private authService: AuthService) { }

  public userLogin: string = '';
  public userPassword: string = '';

  ngOnInit(): void {
  }

  public login(){
    this.authService.login(this.userLogin, this.userPassword)
    console.log('logged in successfully', this.authService.isAuthenticated());
  }
}
