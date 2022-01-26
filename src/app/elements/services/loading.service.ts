import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingShowed$: Subject<boolean> = new Subject<boolean>();
  private delayTime: number = 2000;

  public getLoaderState(): Subject<boolean> {
    return this.isLoadingShowed$;
  }

  public startLoading() {
    this.isLoadingShowed$.next(true);
  }

  public stopLoading() {
    this.isLoadingShowed$.next(false);
  }

  public getDelay(): number {
    return this.delayTime;
  }
}
