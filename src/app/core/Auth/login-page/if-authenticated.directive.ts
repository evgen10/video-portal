import { AfterContentChecked, AfterContentInit, AfterViewInit, Directive, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Directive({
  selector: '[IfAuthenticatedShow]'
})
export class IfAuthenticatedDirective implements OnInit, OnDestroy {

  private isShow: boolean = false;
  private subscriptions: Subscription[] = [];

  @Input('IfAuthenticatedShow') set showAuthed(condition: boolean) {
    this.isShow = condition;
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    const subscription = this.authService.isAuthenticated().subscribe(x => {
      if (this.isShow ? !x: x) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    })
    this.subscriptions.push(subscription);
  }
}
