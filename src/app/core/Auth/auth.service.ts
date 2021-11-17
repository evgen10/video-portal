import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: IUser | null = null;

  private _isAuthenticated = false;

  constructor() { }

  public isAuthenticated() : boolean {
    return this._isAuthenticated;
  }

  public login(userLogin: string, userPassword: string) {
    this.currentUser = {
      id: 1,
      firstName:'admin',
      lastName: 'admin',
      userLogin: userLogin,
      password: userPassword,
    }
    this._isAuthenticated = true;
  }

  public logout() {
    this.currentUser = null;
    this._isAuthenticated = false;
  }

  public getUserInfo() {
    return this.currentUser?.userLogin;
  }
}
