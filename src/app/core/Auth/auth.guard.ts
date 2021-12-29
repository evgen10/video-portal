import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router) {  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    var guard =  this.authService.isAuthenticated().pipe(map(x => {
      if (x) {
        return true;
      } else {
        this.route.navigate(['/login']);
        return false;
      }
    }))
    return guard;
  }
}
