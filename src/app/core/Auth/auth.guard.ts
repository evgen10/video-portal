import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectAuthitification } from "./store/auth.selectors";
import { AuthState } from "./store/auth.state";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  private isAuthenticated$: Observable<boolean> = this.store$.pipe(select(selectAuthitification))

  constructor(private route: Router, private store$: Store<AuthState>) {
    this.isAuthenticated$.subscribe((value) => {
      if (!value) {
        this.route.navigate(['/login']);
      }
    })
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.isAuthenticated$;
  }
}
