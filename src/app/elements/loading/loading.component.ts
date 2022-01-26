import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];

  constructor(private loadingService: LoadingService) { }

  public isLoaded: boolean = false;

  ngOnInit(): void {
    var sub = this.loadingService.getLoaderState()
      .subscribe(x => {
        this.isLoaded = x
        console.log('Loading' + x);
      });

    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe())
  }
}
