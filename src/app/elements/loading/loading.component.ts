import { Component, OnDestroy, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { selectLoading } from './store/loading.selectors';
import { LoadingState } from './store/loading.state';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent  {

  constructor(
    private loadingService: LoadingService,
    private loadingStore: Store<LoadingState>) { }

  public isLoaded$ = this.loadingStore.select(selectLoading);
}
