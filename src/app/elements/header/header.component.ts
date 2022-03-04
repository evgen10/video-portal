import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { logout } from 'src/app/core/Auth/store/auth.actions';
import { selectUserName } from 'src/app/core/Auth/store/auth.selectors';
import { AuthState } from 'src/app/core/Auth/store/auth.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private username$ = this.authStore.select(selectUserName);

  constructor(private authStore: Store<AuthState>, private router: Router) { }

  ngOnInit(): void { }

  public getUserInfo(): Observable<string> {
    return this.username$.pipe(
      map(name => {
        return `${name?.first} ${name?.last}`
      }))
  }

  public logoff() {
    this.authStore.dispatch(logout())
    this.router.navigate(['/login']);
  }
}
