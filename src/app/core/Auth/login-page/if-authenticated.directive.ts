import { Directive, DoCheck, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../auth.service';

@Directive({
  selector: '[IfAuthenticatedShow]'
})
export class IfAuthenticatedDirective implements OnInit {

  private isShow: boolean = false;

  @Input('IfAuthenticatedShow') set showAuthed(condition: boolean) {
    this.isShow = condition;
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.isShow ? !this.authService.isAuthenticated() : this.authService.isAuthenticated()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
