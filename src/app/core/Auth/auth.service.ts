import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from 'src/app/elements/services/loading.service';
import { ILogin } from '../models/login';
import { IToken } from '../models/token';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authEndPoint: string = 'http://localhost:3004/auth/login';
  private userInfoEndPoint: string = "http://localhost:3004/auth/userinfo";

  constructor(
    private httpClient: HttpClient)
    { }

  public getUserInfo(token: IToken) {
    return this.httpClient.post<IUser>(this.userInfoEndPoint, token);
  }

  public login(loginData: ILogin) {
    return this.httpClient.post<IToken>(this.authEndPoint, loginData);
  }
}
