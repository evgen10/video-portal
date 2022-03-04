import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { delay, first, switchMap } from "rxjs/operators";
import { selectCurrentToken } from "./store/auth.selectors";
import { AuthState } from "./store/auth.state";
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authState$: Store<AuthState>) { }

  private currentToken$ = this.authState$.select(selectCurrentToken);

  private getDelay(): number {
    const min = 200;
    const max = 1100;
    return Math.floor(Math.random() * max) + min;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.currentToken$.pipe(
      first(),
      switchMap(token => {
        let newRequest = req;
        if (token) {
          newRequest = req.clone({
            headers: req.headers.append('Authorization', token)
          });
        }
        console.log('inerceptor');
        return next.handle(newRequest).pipe(delay(this.getDelay()));
      }));
  }
}
