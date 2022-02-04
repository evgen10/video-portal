import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { AuthService } from "../auth.service";
import { getToken, getUser, login } from "./auth.actions";

@Injectable()
export class AuthEffects {

  constructor(private authService: AuthService, private actions$: Actions) {}

  login$ = createEffect(() =>
      this.actions$.pipe(
        ofType(login),
        switchMap((action) => this.authService.login(action.loginData).pipe(
          map(token =>  getToken({currentToken: token}),
          catchError(() => EMPTY))
        ))
      ));

  getToken$ = createEffect(() =>
      this.actions$.pipe(
        ofType(getToken),
        switchMap((action) => this.authService.getUserInfo(action.currentToken).pipe(
          map(user => getUser({user: user, isAuthenticated: !!user.fakeToken,}),
          catchError(() => EMPTY))
        ))
      ));

}
