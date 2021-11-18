import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: IUser | null = null;

  private _isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public isAuthenticated() : BehaviorSubject<boolean> {
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
    this._isAuthenticated.next(true);
  }

  public logout() {
    this.currentUser = null;
    this._isAuthenticated.next(false);
  }

  public getUserInfo() {
    return this.currentUser?.userLogin;
  }
}
