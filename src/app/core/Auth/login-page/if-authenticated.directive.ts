import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectAuthitification } from '../store/auth.selectors';
import { AuthState } from '../store/auth.state';

@Directive({
  selector: '[IfAuthenticatedShow]'
})
export class IfAuthenticatedDirective implements OnInit, OnDestroy {

  private isShow: boolean = false;
  private subscriptions: Subscription[] = [];
  private isAuthenticated$ = this.authStore.select(selectAuthitification);

  @Input('IfAuthenticatedShow') set showAuthed(condition: boolean) {
    this.isShow = condition;
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authStore: Store<AuthState>
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    const subscription = this.isAuthenticated$.subscribe(x => {
      if (this.isShow ? !x: x) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    })
    this.subscriptions.push(subscription);
  }
}
