import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { EMPTY } from "rxjs";
import { switchMap, map, catchError, delay } from "rxjs/operators";
import { setLoader } from "src/app/elements/loading/store/loading.actions";
import { LoadingState } from "src/app/elements/loading/store/loading.state";
import { LoadingService } from "src/app/elements/services/loading.service";
import { AuthService } from "../auth.service";
import { getToken, getUser, login } from "./auth.actions";

@Injectable()
export class AuthEffects {

  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private loadingStore: Store<LoadingState>) {}

  login$ = createEffect(() =>
      this.actions$.pipe(
        ofType(login),
        switchMap((action) => this.authService.login(action.loginData).pipe(
          map((token) =>
          {
            return getToken({currentToken: token})
          },
          catchError(() =>
          {
            this.loadingStore.dispatch(setLoader({isLoading: false}));
            return EMPTY;
          }))
        ))
      ));

  getToken$ = createEffect(() =>
      this.actions$.pipe(
        ofType(getToken),
        switchMap((action) => this.authService.getUserInfo(action.currentToken).pipe(
          map((user) =>
          {
            this.loadingStore.dispatch(setLoader({isLoading: false}));
            return getUser({user: user, isAuthenticated: !!user.fakeToken,});
          },
          catchError(() =>
          {
            this.loadingStore.dispatch(setLoader({isLoading: false}));
            return EMPTY;
          }))
        ))
      ));
}


