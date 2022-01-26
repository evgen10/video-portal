import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let cloned = req;

    if (this.authService.currentToken) {
      cloned = req.clone({
        headers: req.headers.append('Authorization', this.authService.currentToken)
      })
    }
    console.log('inerceptor');
    return next.handle(cloned);
  }
}
