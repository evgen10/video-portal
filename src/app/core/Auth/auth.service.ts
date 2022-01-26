import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LoadingService } from 'src/app/elements/services/loading.service';
import { ILogin } from '../models/login';
import { IToken } from '../models/token';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: IUser | null = null;
  public currentToken: string = '';

  private _isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private authEndPoint: string = 'http://localhost:3004/auth/login';
  private userInfoEndPoint: string = "http://localhost:3004/auth/userinfo";

  constructor(private httpClient: HttpClient, private route: Router, private loadingService: LoadingService) { }

  public isAuthenticated(): BehaviorSubject<boolean> {
    return this._isAuthenticated;
  }

  public login(loginData: ILogin) {
    this.loadingService.startLoading();
    //как правильно нужно отписываться от стримов в сервисах?
    return this.httpClient.post<IToken>(this.authEndPoint, loginData)
      .pipe(delay(this.loadingService.getDelay()))
      .subscribe(
        token => {
          this.currentToken = token.token;
          this.httpClient.post<IUser>(this.userInfoEndPoint, token)
            .subscribe(user => {
              this.currentUser = user;
            })
          this._isAuthenticated.next(!!token.token);
          this.route.navigate(['/cources']);
          this.loadingService.stopLoading();
        },
        (error) => { this.loadingService.stopLoading() })
  }

  public logout() {
    this.currentUser = null;
    this._isAuthenticated.next(false);
  }

  public getUserInfo(): string {
    return `${this.currentUser?.name?.first} ${this.currentUser?.name?.last}`;
  }
}
